import path from 'path';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { MongoClient } from 'mongodb';

config();
const mongConc = process.env.DB_MONGO_CONNECTION
const client = new MongoClient(mongConc);
let db;

export async function connect() {
    if (!db) {
        await client.connect();
        db = client.db("Arie");
        console.log('MongoDB connection established');
    }
    return db;
}
connect();


