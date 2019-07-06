import assert from 'assert';
import { request } from 'graphql-request';
import { log } from '../../utils/logger';
import { APP_URL, APP_PORT } from '../../constants';
import { HvacValueInput, HvacValueSource } from '../../graphql/gen-types';
import { MqttRouteHandler } from '../types';

const LOG = 'MQTT:HvacValue:';

const add = async ({ source, temperatureValue, humidityValue, dateTime }: HvacValueInput) => {
  const query = `mutation _($input: HvacValueInput) {
    addHvacValue ( input: $input) {
      source
      temperatureValue
      humidityValue
      dateTime
    }
  }`;

  // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
  const variables = {
    input: {
      source,
      temperatureValue,
      humidityValue,
      dateTime
    }
  } as { input: HvacValueInput };

  const result = await request(`${APP_URL}:${APP_PORT}/graphql`, query, variables);
  return result;
};

//TODO: replace hardcoded id router
const getSourceById = (sensorId: string) => ([{
  id: 'test-01',
  value: HvacValueSource.Garage
}].find(x => x.id === sensorId) || { value: null }).value;

export const hvacValueHandler: MqttRouteHandler = async ({ topic, message }) => {
  const dateTime = Date.now();
  const route = topic.split('/');
  assert(route.length === 4, `${LOG} Route should follow convention: /home/hvac/sensor-id`);

  const source = getSourceById(route[3]);
  assert(source, `${LOG} Source not found`);

  const payload = JSON.parse(message.toString()) as HvacValueInput;
  assert(payload.temperatureValue, `${LOG} Payload requires temperatureValue`);
  assert(payload.humidityValue, `${LOG} Payload requires humidityValue`);

  return await add({ dateTime, source, ...payload });
};