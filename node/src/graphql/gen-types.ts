export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type HvacValue = {
  __typename?: "HvacValue";
  _id: Scalars["String"];
  source: HvacValueSource;
  temperatureValue: Scalars["Float"];
  humidityValue: Scalars["Float"];
  dateTime: Scalars["Float"];
};

export enum HvacValueColumns {
  Source = "source",
  TemperatureValue = "temperatureValue",
  HumidityValue = "humidityValue",
  DateTime = "dateTime"
}

export type HvacValueInput = {
  source: HvacValueSource;
  temperatureValue: Scalars["Float"];
  humidityValue: Scalars["Float"];
  dateTime: Scalars["Float"];
};

export enum HvacValueSource {
  Thermostat = "THERMOSTAT",
  Kitchen = "KITCHEN",
  Living = "LIVING",
  Dining = "DINING",
  Bedroom1 = "BEDROOM1",
  Bedroom2 = "BEDROOM2",
  Bedroom3 = "BEDROOM3",
  Office = "OFFICE",
  Garage = "GARAGE",
  Master = "MASTER"
}

export type Mutation = {
  __typename?: "Mutation";
};

export type Query = {
  __typename?: "Query";
};
