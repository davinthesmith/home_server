import { MongoClient, Db } from 'mongodb';

const MONGO_DB = process.env.MONGO_DB;
const MONGO_URL = process.env.MONGO_URL;
const USERNAME = process.env.MONGO_DB_ROOT_USERNAME;
const PASSWORD = process.env.MONGO_DB_ROOT_PASSWORD;
const MONGO_CONNSTRING = `mongodb://${USERNAME}:${PASSWORD}@${MONGO_URL}:27017/admin`;

let db: Db;
export const mongo = async () => {
  if (db) return db;
  try {
    const client = await MongoClient.connect(MONGO_CONNSTRING);
    return client.db(MONGO_DB);
  } catch (err) {
    throw err;
  }
}