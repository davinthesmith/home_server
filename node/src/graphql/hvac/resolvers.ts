import { db } from '../../db';
import { HvacValue, HvacValueSource, HvacValueInput, HvacValueColumns } from '../gen-types';

export const HVAC_TABLE = 'hvac_values';
export const HVAC_COLUMNS = ['_id', 'source', 'temperatureValue', 'humidityValue', 'dateTime'];

interface QueryHvacValuesArgs {
  source: HvacValueSource;
  startDate: number;
  endDate: number;
  orderBy: HvacValueColumns[];
}

interface MutationAddHvacValueArgs {
  input: HvacValueInput;
}

export const resolvers = {
  Query: {
    hvacValues: async (parent: any, args: QueryHvacValuesArgs): Promise<HvacValue[]> => {
      try {
        const query = db(HVAC_TABLE).select(HVAC_COLUMNS);

        // set optional where clauses
        if (args.source) query.where('source', args.source);
        if (args.startDate) query.where('dateTime', '>=', args.startDate);
        if (args.endDate) query.where('dateTime', '<=', args.endDate);

        //TODO: Add support for desc and asc (requires object-syntax for columns in sorting)
        // https://knexjs.org/#Builder-orderBy
        if (args.orderBy) query.orderBy(args.orderBy);

        return await query;
      } catch (err) { throw err; }
    }
  },
  Mutation: {
    addHvacValue: async (parent: any, args: MutationAddHvacValueArgs): Promise<HvacValue> => {
      try {
        const query = db(HVAC_TABLE)
          .insert(args.input)
          .returning(HVAC_COLUMNS);
        const results = await query;
        return results[0];
      } catch (err) { throw err; }
    }
  }
};