import { mongo } from "../db/mongo";
import { Temperature, TemperatureSource, TemperatureInput } from "../gen-types"
import { TEMPERATURE_COLLECTION } from '../constants'

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
    temperatures: async (parent: any, args: QueryTemperaturesArgs, ctx: any) : Promise<Temperature[]> => {
      const db = await mongo();
      return await db.collection(TEMPERATURE_COLLECTION).find({}).toArray();
    }
  },
  Mutation: {
    addTemperature: async (parent: any, args: MutationAddTemperatureArgs, ctx: any) : Promise<Temperature> => {
      const db = await mongo();
      const result = await db.collection(TEMPERATURE_COLLECTION).insertOne(args.input);
      return result.ops[0];
    }
  }
};