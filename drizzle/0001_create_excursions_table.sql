CREATE TABLE IF NOT EXISTS "excursions" (
  "id" SERIAL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "short_description" TEXT NOT NULL,
  "price" DECIMAL(10, 2) NOT NULL,
  "duration" TEXT NOT NULL,
  "difficulty" TEXT NOT NULL,
  "location" TEXT NOT NULL,
  "meeting_point" TEXT NOT NULL,
  "what_to_bring" TEXT,
  "included" TEXT,
  "not_included" TEXT,
  "max_participants" INTEGER NOT NULL,
  "featured" BOOLEAN DEFAULT FALSE,
  "image_url" TEXT NOT NULL,
  "gallery_images" TEXT[],
  "created_at" TIMESTAMP DEFAULT NOW()
);