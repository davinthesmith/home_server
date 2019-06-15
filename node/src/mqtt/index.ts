import { connect, MqttClient } from 'mqtt';
import { routes } from './routes'
import { log } from '../utils/logger'
import { MQTT_URL } from '../constants'

const MQTT_TOPICS = routes.map(x => x.topic);

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
  const rootTopic = topic.split('/')[1];
  const route = routes.find(x => x.topic === rootTopic);
  if (route) {
    route.handler(topic, message);
  } else {
    log.warn(`MQTT: ${rootTopic} is not a valid route`)
  }
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
