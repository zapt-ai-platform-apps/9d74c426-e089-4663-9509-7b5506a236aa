import { pgTable, serial, text, decimal, integer, boolean, timestamp, date, time } from 'drizzle-orm/pg-core';

export const excursions = pgTable('excursions', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  shortDescription: text('short_description').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  duration: text('duration').notNull(),
  difficulty: text('difficulty').notNull(),
  location: text('location').notNull(),
  meetingPoint: text('meeting_point').notNull(),
  whatToBring: text('what_to_bring'),
  included: text('included'),
  notIncluded: text('not_included'),
  maxParticipants: integer('max_participants').notNull(),
  featured: boolean('featured').default(false),
  imageUrl: text('image_url').notNull(),
  galleryImages: text('gallery_images').array(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const availableDates = pgTable('available_dates', {
  id: serial('id').primaryKey(),
  excursionId: integer('excursion_id').notNull().references(() => excursions.id, { onDelete: 'cascade' }),
  date: date('date').notNull(),
  time: time('time').notNull(),
  spotsAvailable: integer('spots_available').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const bookings = pgTable('bookings', {
  id: serial('id').primaryKey(),
  excursionId: integer('excursion_id').notNull().references(() => excursions.id, { onDelete: 'cascade' }),
  dateId: integer('date_id').notNull().references(() => availableDates.id, { onDelete: 'cascade' }),
  customerName: text('customer_name').notNull(),
  customerEmail: text('customer_email').notNull(),
  customerPhone: text('customer_phone').notNull(),
  participants: integer('participants').notNull(),
  totalPrice: decimal('total_price', { precision: 10, scale: 2 }).notNull(),
  status: text('status').notNull().default('pending'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
});