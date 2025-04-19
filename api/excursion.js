import { excursions, availableDates } from '../drizzle/schema.js';
import { getDbClient } from './_apiUtils.js';
import * as Sentry from "@sentry/node";
import { eq } from 'drizzle-orm';

export default async function handler(req, res) {
  console.log('Excursion API called with method:', req.method);
  
  try {
    const { client, db } = getDbClient();
    
    if (req.method === 'GET') {
      const { id } = req.query;
      
      if (!id) {
        return res.status(400).json({ error: 'Missing excursion ID' });
      }
      
      console.log('Fetching excursion with ID:', id);
      
      const excursionResult = await db.select().from(excursions).where(eq(excursions.id, parseInt(id))).limit(1);
      
      if (excursionResult.length === 0) {
        return res.status(404).json({ error: 'Excursion not found' });
      }
      
      const excursionData = excursionResult[0];
      
      // Get available dates for this excursion
      const datesResult = await db.select().from(availableDates).where(eq(availableDates.excursionId, parseInt(id)));
      
      console.log(`Fetched excursion with ID ${id} and ${datesResult.length} available dates`);
      
      res.status(200).json({
        ...excursionData,
        availableDates: datesResult
      });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
    
    await client.end();
  } catch (error) {
    console.error('Error in excursion API:', error);
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}