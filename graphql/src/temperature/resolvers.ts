import { ITemperature, Source as TemperatureSource } from "."

const temperatures: ITemperature[] = [
  {
    source: TemperatureSource.THERMOSTAT,
    value: 70.1,
    dateTime: 1559715522812
  },
  {
    source: TemperatureSource.LIVING,
    value: 73.2,
    dateTime: 1559715522813
  }
];

interface ITemperaturesInputs { source: TemperatureSource, startDate: Number, endDate: Number }

export const resolvers = {
  Query: {
    temperatures: (parent: any, { source, startDate, endDate }: ITemperaturesInputs) =>
      temperatures.filter(x => {
        const sourceMatch = source
          ? source === x.source
          : true;
        const afterStartDate = startDate
          ? x.dateTime >= startDate
          : true;
        const beforeEndDate = endDate
          ? x.dateTime <= endDate
          : true;
        return sourceMatch && afterStartDate && beforeEndDate;
      })

  }
};