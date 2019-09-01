import { gql } from 'apollo-server';

export const typeDefs = gql`
  type HvacValue {
    _id: String!
    source: HvacValueSource!
    temperatureValue: Float!
    humidityValue: Float!
    dateTime: Float!
  }

  input HvacValueInput {
    source: HvacValueSource!
    temperatureValue: Float!
    humidityValue: Float!
    dateTime: Float!
  }

  enum HvacValueSource {
    THERMOSTAT
    KITCHEN
    LIVING
    DINING
    BEDROOM1
    BEDROOM2
    BEDROOM3
    OFFICE
    GARAGE
    MASTER
  }

  enum HvacValueColumns {
    _id
    source
    temperatureValue
    humidityValue
    dateTime
  }

  input HvacValueOrderBy {
    column: HvacValueColumns!
    order: SqlSortOrder
  }

  type Query {
    hvacValues (
      source: HvacValueSource, 
      startDate: Float, 
      endDate: Float, 
      first: Int, 
      offset: Int, 
      orderBy: [HvacValueOrderBy!])
      : [HvacValue!]
  }

  type Mutation {
    addHvacValue (input: HvacValueInput): HvacValue
  }
`;
