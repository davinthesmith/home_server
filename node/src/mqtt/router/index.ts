import { log } from '../../utils/logger';
import { MqttPayload } from '../types';
import { routes } from './routes';

const LOG = 'MQTT:Router:';

export const getHandlerByRootTopic = (rootTopic: string) =>
  routes.find(x => x.topic === rootTopic);

// find the route and send
export const router = async ({ topic, message }: MqttPayload) => {
  try {
    const rootTopic = topic.split('/')[2];
    const route = getHandlerByRootTopic(rootTopic);
    if (route) {
      log.info(`${LOG} ${rootTopic} message routed`);
      return await route.handler({ topic, message });
    } else {
      log.warn(`${LOG} ${rootTopic} is not a valid route`);
    }
  } catch (err) {
    log.error(`${LOG} ${err.message}`);
  }
};
