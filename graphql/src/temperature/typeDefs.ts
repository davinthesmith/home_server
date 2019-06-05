import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Temperature {
    source(type: TemperatureSource): TemperatureSource,
    value: Float,
    dateTime: Float
  }

  enum TemperatureSource {
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

  extend type Query {
    temperatures( source: TemperatureSource, startDate: Float, endDate: Float): [Temperature]
  }
`;
