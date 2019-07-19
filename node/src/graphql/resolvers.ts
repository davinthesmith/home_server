import { merge } from 'lodash';
import { resolvers as hvac } from './hvac/resolvers';

export default merge(
  hvac,
); 