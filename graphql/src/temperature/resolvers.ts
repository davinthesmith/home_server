// import * as C from "./constants"
// import { ITemperature } from "./types";

const temperatures: ITemperature[] = [
  {
    source: Source.THERMOSTAT,
    value: 70.1,
    dateTime: 1559715522813
  },
  {
    source: Source.LIVING,
    value: 73.2,
    dateTime: 1559715522813
  }
];

export const resolvers = {
  Query: {
    temperatures: (parent: any, { source }: {source: Source }) => temperatures.filter(x => x.source === source),
  }
};