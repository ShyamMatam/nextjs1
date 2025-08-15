// mongodb.js - Database connection helper
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb+srv://matamshyam01:cluster0@cluster0.y7kaxci.mongodb.net/Auth-dmi?retryWrites=true&w=majority';

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the connection
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new connection
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function getDatabase() {
  try {
    const client = await clientPromise;
    console.log("Connected to MongoDB Atlas");
    
    // Make sure we're using the correct database name
    const db = client.db('Auth-dmi');
    
    // Log available collections for debugging
    const collections = await db.listCollections().toArray();
    console.log("Available collections:", collections.map(c => c.name));
    
    return db;
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}