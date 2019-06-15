import { connect, MqttClient } from 'mqtt';
import { router, topics } from './routes'
import { log } from '../utils/logger'
import { MQTT_URL } from '../constants'

const MQTT_TOPICS = topics;

// the exported client used for all things mqtt
export const client = connect(MQTT_URL);

// setup subscriptions when the client connects 
client.on('connect', async () => {
  try {
    await subscribeToTopics(client, MQTT_TOPICS)
    await client.publish('/temperature/thing', 'TEST')
  } catch (err) {
    log.error(err);
  }
});

// route incoming messages
client.on('message', (topic, message) => {
  log.info(`MQTT Message: ${topic}: ${message}`)
  router({ topic, message });
})

// automatically subscribes to the array of topics and all of their sub topics
const subscribeToTopics = async (client: MqttClient, topics: string[]) => {
  const asyncSubscribe = async (topic: string) => {
    log.info(`Mqtt subscribing to: ${topic}`);
    await client.subscribe(topic);
  }
  // notice "#" here is being used for subtopics 
  return await Promise.all(topics.map(topic => `/${topic}/#`).map(asyncSubscribe));
}
