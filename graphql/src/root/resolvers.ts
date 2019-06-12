import { merge } from 'lodash'
import temperature from '../temperature'

export default merge(
  temperature.resolvers,
) 