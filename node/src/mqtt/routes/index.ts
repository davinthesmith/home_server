import { log } from '../../utils/logger'
import { MqttPayload, MqttRoute } from '../types'
import { temperatureHandler } from './temperature'

// links routes with handlers
export const routes: MqttRoute[] = [
  { topic: "temperature", handler: temperatureHandler },
]

// find the route and send
export const router = ({ topic, message }: MqttPayload) => {
  const rootTopic = topic.split('/')[1];
  const route = routes.find(x => x.topic === rootTopic);
  if (route) {
    route.handler({topic, message});
  } else {
    log.warn(`MQTT: ${rootTopic} is not a valid route`)
  }
}

// exposes list of topics
export const topics = routes.map(x => x.topic);
