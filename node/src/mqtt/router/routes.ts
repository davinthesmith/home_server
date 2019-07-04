import { MqttRoute } from '../types';
import { temperatureHandler } from '../temperature';

// links routes with handlers
export const routes: MqttRoute[] = [
  { topic: 'temperature', handler: temperatureHandler },
];

// dynamic list of root topics based on routes
export const rootTopics = routes.map(x => x.topic);