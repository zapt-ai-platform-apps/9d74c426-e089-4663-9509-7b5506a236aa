import { excursions } from '../drizzle/schema.js';
import { getDbClient } from './_apiUtils.js';
import * as Sentry from "@sentry/node";

export default async function handler(req, res) {
  console.log('Excursions API called with method:', req.method);
  
  try {
    const { client, db } = getDbClient();
    
    if (req.method === 'GET') {
      const featured = req.query.featured === 'true';
      
      let query = db.select().from(excursions);
      
      if (featured) {
        query = query.where({ featured: true });
      }
      
      const result = await query;
      console.log(`Fetched ${result.length} excursions`);
      
      res.status(200).json(result);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
    
    await client.end();
  } catch (error) {
    console.error('Error in excursions API:', error);
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}