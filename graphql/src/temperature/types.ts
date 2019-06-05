export const enum Source {
  THERMOSTAT="THERMOSTAT",
  KITCHEN="KITCHEN",
  LIVING="LIVING",
  DINING="DINING",
  LAN="LAN",
  JADYN="JADYN",
  MASTER="MASTER"
}

export interface ITemperature {
  source: Source,
  value: Number,
  dateTime: Number
}

