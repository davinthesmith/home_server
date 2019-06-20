import { db } from '../../db';
import { Temperature, TemperatureSource, TemperatureInput } from "../gen-types"
import { TEMPERATURE_COLLECTION, TEMPERATURE_COLUMNS } from '../../constants';

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
        const query = db(TEMPERATURE_COLLECTION).select(TEMPERATURE_COLUMNS);

        // set optional where clauses
        if (args.source) query.where('source', args.source);
        if (args.startDate) query.where('dateTime', '>=', args.startDate);
        if (args.endDate) query.where('dateTime', '<=', args.endDate);

        return await query;
      } catch (err) { throw err }
    }
  },
  Mutation: {
    addTemperature: async (parent: any, args: MutationAddTemperatureArgs, ctx: any): Promise<Temperature> => {
      try {
        const query = db(TEMPERATURE_COLLECTION)
          .insert(args.input)
          .returning(TEMPERATURE_COLUMNS);
        const results = await query;
        return results[0];
      } catch (err) { throw err }
    }
  }
};