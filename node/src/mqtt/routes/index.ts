import { temperatureHandler } from './temperature'

export const routes = [
  {
    topic: "temperature",
    handler: temperatureHandler
  }
]