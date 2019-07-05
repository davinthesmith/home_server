import assert from 'assert';
import { request } from 'graphql-request';
import { log } from '../../utils/logger';
import { APP_URL, APP_PORT } from '../../constants';
import { TemperatureInput } from '../../graphql/gen-types';
import { MqttRouteHandler } from '../types';

const add = async ({ source, value, dateTime }: TemperatureInput) => {
  const query = `mutation _($input: TemperatureInput) {
    addTemperature ( input: $input) {
      source
      value
      dateTime
    }
  }`;

  // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
  const variables = {
    input: {
      source,
      value,
      dateTime
    }
  } as { input: TemperatureInput };

  const result = await request(`${APP_URL}:${APP_PORT}/graphql`, query, variables);
  log.info(result);
  return result;
};

export const temperatureHandler: MqttRouteHandler = async ({ topic, message }) => {
  const route = topic.split('/');
  assert(route.length === 4, 'MQTT:Temperature: Route should follow convention: /temperature/action/source');

  const action = route[2];
  const source = route[3];
  const payload = JSON.parse(message.toString()) as TemperatureInput;
  const serverDate = Date.now();

  switch (action) {
    case 'add':
      // payload vales for "source" and "dateTime" will override
      return await add({ source, dateTime: serverDate, ...payload });
    default:
      throw new Error('MQTT:Temperature: Unrecognized action');
  }
};