import * as Sentry from "@sentry/node";
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

export function getDbClient() {
  const client = postgres(process.env.COCKROACH_DB_URL);
  const db = drizzle(client);
  return { client, db };
}