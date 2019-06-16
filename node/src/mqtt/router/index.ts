import { log } from '../../utils/logger'
import { MqttPayload } from '../types'
import { routes } from './routes'

// find the route and send
export const router = ({ topic, message }: MqttPayload) => {
  const rootTopic = topic.split('/')[1];
  const route = getHandlerByRootTopic(rootTopic);
  if (route) {
    log.info(`MQTT: ${rootTopic} message routed`)
    route.handler({ topic, message });
  } else {
    log.warn(`MQTT: ${rootTopic} is not a valid route`)
  }
}

export const getHandlerByRootTopic = (rootTopic: string) => routes.find(x => x.topic === rootTopic);