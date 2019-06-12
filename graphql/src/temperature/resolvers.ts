import { Temperature, TemperatureSource, TemperatureInput } from "../gen-types"

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
    temperatures: (parent: any, args: QueryTemperaturesArgs, ctx: any) => { }
  },
  Mutation: {
    addTemperature: (parent: any, args: MutationAddTemperatureArgs, ctx: any) => { }
  }
};