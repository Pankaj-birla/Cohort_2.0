import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:npg_4DRTzwBaJH8x@ep-still-night-a5lcntto-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");
    await client.connect();
    return client;
}