import { Temperature, TemperatureSource, TemperatureInput } from "../gen-types"

const temperatures: Temperature[] = [
  {
    source: TemperatureSource.Thermostat,
    value: 70.1,
    dateTime: 1559715522812
  },
  {
    source: TemperatureSource.Living,
    value: 73.2,
    dateTime: 1559715522813
  }
];

interface QueryTemperaturesArgs {
  source: TemperatureSource,
  startDate: Number,
  endDate: Number
}

interface MutationAddTemperatureArgs {
  input: TemperatureInput
}

export const resolvers = {
  Query: {
    temperatures: (parent: any, args: QueryTemperaturesArgs, ctx: any) =>
      temperatures.filter(x => {
        const sourceMatch = args.source
          ? args.source === x.source
          : true;
        const afterStartDate = args.startDate
          ? x.dateTime >= args.startDate
          : true;
        const beforeEndDate = args.endDate
          ? x.dateTime <= args.endDate
          : true;
        return sourceMatch && afterStartDate && beforeEndDate;
      })
  },
  Mutation: {
    addTemperature: (parent: any, args: MutationAddTemperatureArgs, ctx: any) => {
      temperatures.push(args.input);
      return args.input;
    }
  }
};