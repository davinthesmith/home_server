// import { request } from 'graphql-request'

// const query = `query getMovie($title: String!) {
//   Movie(title: $title) {
//     releaseDate
//     actors {
//       name
//     }
//   }
// }`

// const variables = {
//   title: 'Inception',
// }

// request('my-endpoint', query, variables).then(data => console.log(data))

import { log } from '../../utils/logger'
import { MqttRouteHandler } from '../types'

export const temperatureHandler: MqttRouteHandler = ({ topic, message }) => {
  log.info(`HANDLER HIT: ${topic} ${message}`)
}