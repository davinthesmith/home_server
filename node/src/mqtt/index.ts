import { connect, MqttClient } from 'mqtt';
import { log } from '../utils/logger'
import { MQTT_URL, MQTT_SUBSCRIPTIONS } from '../constants'

export const client = connect(MQTT_URL);

// setup subscriptions when the client connects 
client.on('connect', async () => {
  try {
    await subscribeToList(client, MQTT_SUBSCRIPTIONS)
  } catch (err) {
    log.error(err);
  }
});

// route incoming messages
client.on('message', (topic, message) => {
  // message is Buffer
  console.log(message.toString())
  client.end();
})

// automatically subscribes to the array of subscriptions
const subscribeToList = async (client: MqttClient, subscriptions: string[]) => {
  const asyncSubscribe = async (subscription: string) => {
    log.info(`Mqtt subscribing to: ${subscription}`);
    await client.subscribe(subscription);
  }
  return await Promise.all(subscriptions.map(asyncSubscribe));
}
