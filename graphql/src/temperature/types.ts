export const enum Source {
  THERMOSTAT = "THERMOSTAT",
  KITCHEN = "KITCHEN",
  LIVING = "LIVING",
  DINING = "DINING",
  BEDROOM1 = "BEDROOM1",
  BEDROOM2 = "BEDROOM2",
  BEDROOM3 = "BEDROOM3",
  OFFICE = "OFFICE",
  GARAGE = "GARAGE",
  MASTER = "MASTER"
}

export interface ITemperature {
  source: Source,
  value: Number,
  dateTime: Number
}

