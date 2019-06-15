import { MongoClient, Db } from 'mongodb';
import { MONGO_CONNSTRING, MONGO_DB } from '../constants'

let db: Db;
export const mongo = async () => {
  if (db) return db;
  try {
    const client = await MongoClient.connect(MONGO_CONNSTRING, { poolSize: 5, useNewUrlParser: true });
    db = client.db(MONGO_DB);
    return db;
  } catch (err) {
    throw err;
  }
}