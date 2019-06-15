import { mongo } from "../../db/mongo";
import { Temperature, TemperatureSource, TemperatureInput } from "../gen-types"
import { TEMPERATURE_COLLECTION } from '../../constants'

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
    temperatures: async (parent: any, args: QueryTemperaturesArgs, ctx: any): Promise<Temperature[]> => {
      try {
        const db = await mongo();

        // build query object
        let query: any = {};
        if (args.source) query.source = args.source;

        // build dateRange query
        let dateQuery: any = {};
        if (args.startDate) dateQuery["$gte"] = args.startDate;
        if (args.endDate) dateQuery["$lte"] = args.endDate;
        if (Object.keys(dateQuery).length) query.dateTime = { ...dateQuery };

        return await db.collection(TEMPERATURE_COLLECTION).find(query).toArray();
      } catch (err) { throw err }
    }
  },
  Mutation: {
    addTemperature: async (parent: any, args: MutationAddTemperatureArgs, ctx: any): Promise<Temperature> => {
      try {
        const db = await mongo();
        const result = await db.collection(TEMPERATURE_COLLECTION).insertOne(args.input);
        return result.ops[0];
      } catch (err) { throw err }
    }
  }
};