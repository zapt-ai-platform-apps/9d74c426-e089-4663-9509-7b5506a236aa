CREATE TABLE IF NOT EXISTS "bookings" (
  "id" SERIAL PRIMARY KEY,
  "excursion_id" INTEGER NOT NULL REFERENCES "excursions"("id") ON DELETE CASCADE,
  "date_id" INTEGER NOT NULL REFERENCES "available_dates"("id") ON DELETE CASCADE,
  "customer_name" TEXT NOT NULL,
  "customer_email" TEXT NOT NULL,
  "customer_phone" TEXT NOT NULL,
  "participants" INTEGER NOT NULL,
  "total_price" DECIMAL(10, 2) NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'pending',
  "notes" TEXT,
  "created_at" TIMESTAMP DEFAULT NOW()
);