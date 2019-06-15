export interface MqttPayload {
  topic: string,
  message: Buffer
}

export type MqttRouteHandler = ({ topic, message }: MqttPayload) => void

export interface MqttRoute {
  topic: string, 
  handler: MqttRouteHandler
}
