// App
export const APP_URL = process.env.APP_URL;
export const APP_PORT = Number(process.env.APP_PORT);

// Database Collections
export const TEMPERATURE_COLLECTION = 'temperatures';
export const TEMPERATURE_COLUMNS = ['_id', 'source', 'value', 'dateTime'];

// MQTT
export const MQTT_URL = process.env.MQTT_URL;
export const MQTT_TOPICS = ['temperature'];
