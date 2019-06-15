import temperature from "./graphql/temperature";

// App
export const APP_URL = process.env.APP_URL;
export const APP_PORT = Number(process.env.APP_PORT);

// Logging 
export const LOGGING_PATH = "/error";

// Database
export const MONGO_DB = process.env.MONGO_DB;
export const MONGO_URL = process.env.MONGO_URL;
export const USERNAME = process.env.MONGO_DB_ROOT_USERNAME;
export const PASSWORD = process.env.MONGO_DB_ROOT_PASSWORD;
export const MONGO_CONNSTRING = `mongodb://${USERNAME}:${PASSWORD}@${MONGO_URL}:27017/admin`;

// Database collections
export const TEMPERATURE_COLLECTION = 'temperature';

// MQTT 
export const MQTT_URL = process.env.MQTT_URL;
export const MQTT_SUBSCRIPTIONS = [
  'temperature'
]