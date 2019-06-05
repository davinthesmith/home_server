// import * as C from "./constants"
// import * as C from "./constants"

declare const enum Source {
  THERMOSTAT,
  KITCHEN,
  LIVING,
  DINING,
  LAN,
  JADYN,
  MASTER
}

interface ITemperature {
  source: Source,
  value: Number,
  dateTime: Number
}

