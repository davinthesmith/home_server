import { MqttRoute } from '../types';
import { hvacValueHandler } from '../hvac';

// links routes with handlers
export const routes: MqttRoute[] = [
  { topic: 'hvac', handler: hvacValueHandler },
];

// dynamic list of root topics based on routes
export const rootTopics = routes.map(x => x.topic);