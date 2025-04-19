import { bookings, availableDates } from '../drizzle/schema.js';
import { getDbClient } from './_apiUtils.js';
import * as Sentry from "@sentry/node";
import { eq } from 'drizzle-orm';

export default async function handler(req, res) {
  console.log('Bookings API called with method:', req.method);
  
  try {
    const { client, db } = getDbClient();
    
    if (req.method === 'POST') {
      const { excursionId, dateId, customerName, customerEmail, customerPhone, participants, totalPrice, notes } = req.body;
      
      if (!excursionId || !dateId || !customerName || !customerEmail || !customerPhone || !participants || !totalPrice) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      // Check if the date has enough spots available
      const dateResult = await db.select().from(availableDates).where(eq(availableDates.id, dateId)).limit(1);
      
      if (dateResult.length === 0) {
        return res.status(404).json({ error: 'Date not found' });
      }
      
      const date = dateResult[0];
      
      if (date.spotsAvailable < participants) {
        return res.status(400).json({ error: 'Not enough spots available' });
      }
      
      // Create booking
      const result = await db.insert(bookings).values({
        excursionId: parseInt(excursionId),
        dateId: parseInt(dateId),
        customerName,
        customerEmail,
        customerPhone,
        participants: parseInt(participants),
        totalPrice: parseFloat(totalPrice),
        notes,
        status: 'pending'
      }).returning();
      
      // Update available spots
      await db.update(availableDates)
        .set({ spotsAvailable: date.spotsAvailable - participants })
        .where(eq(availableDates.id, dateId));
      
      console.log('Created booking with ID:', result[0].id);
      
      res.status(201).json(result[0]);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
    
    await client.end();
  } catch (error) {
    console.error('Error in bookings API:', error);
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}