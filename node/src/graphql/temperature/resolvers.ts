import { db } from '../../db';
import { Temperature, TemperatureSource, TemperatureInput } from "../gen-types"
import { TEMPERATURE_COLLECTION } from '../../constants';

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
        const query = db(TEMPERATURE_COLLECTION)
          .select('_id', 'source', 'value', 'dateTime');

        // build query object
        if (args.source) query.where('source', args.source)

        // build dateRange query
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
          .returning('_id', 'source', 'value', 'dateTime');
        const insertedId = await query;
        return { ...args.input, '_id': insertedId[0] };

      } catch (err) { throw err }
    }
  }
};