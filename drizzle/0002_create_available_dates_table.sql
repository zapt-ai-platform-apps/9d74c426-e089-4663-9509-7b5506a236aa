CREATE TABLE IF NOT EXISTS "available_dates" (
  "id" SERIAL PRIMARY KEY,
  "excursion_id" INTEGER NOT NULL REFERENCES "excursions"("id") ON DELETE CASCADE,
  "date" DATE NOT NULL,
  "time" TIME NOT NULL,
  "spots_available" INTEGER NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
);