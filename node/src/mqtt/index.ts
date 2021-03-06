import { connect, MqttClient } from 'mqtt';
import { log } from '../utils/logger';
import { router } from './router';
import { rootTopics } from './router/routes';
import { MQTT_URL } from '../constants';

const MQTT_TOPICS = rootTopics;
const LOG = 'MQTT:Subscribe:';

// automatically subscribes to the array of topics and all of their sub topics
const subscribeToTopics = async (client: MqttClient, topics: string[]) => {
  try {
    const asyncSubscribe = async (topic: string) => {
      log.info(`${LOG} ${topic}`);
      await client.subscribe(topic);
    };
    const topicsAndSubTopics = topics.map(topic => `/home/${topic}/#`);
    return await Promise.all(topicsAndSubTopics.map(asyncSubscribe));
  } catch (err) {
    log.error(`${LOG} ${err.message}`);
  }
};

// the exported client used for all things mqtt
export const client = connect(MQTT_URL);
client.on('connect', () => subscribeToTopics(client, MQTT_TOPICS));
client.on('message', (topic, message) => router({ topic, message }));
