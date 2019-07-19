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

  type Query {
    hvacValues (source: HvacValueSource, startDate: Float, endDate: Float, orderBy: [HvacValueColumns!]): [HvacValue!]
  }

  type Mutation {
    addHvacValue (input: HvacValueInput): HvacValue
  }
`;
