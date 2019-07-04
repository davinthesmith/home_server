import { request } from 'graphql-request';
import { log } from '../../utils/logger';
import { MqttRouteHandler } from '../types';
import { APP_URL, APP_PORT } from '../../constants';
import { TemperatureInput } from '../../graphql/gen-types';

export const temperatureHandler: MqttRouteHandler = async ({ topic, message }) => {
  try {
    const query = `mutation _($input: TemperatureInput) {
      addTemperature ( input: $input) {
        source
        value
        dateTime
      }
    }`;

    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
    const variables = {
      input: JSON.parse(message.toString())
    } as { input: TemperatureInput };

    await request(`${APP_URL}:${APP_PORT}/graphql`, query, variables).then(data => console.log(data));
  } catch (err) {
    log.error(err);
    throw (err);
  }
};

const add = ({ source, value, dateTime }: TemperatureInput) => true;