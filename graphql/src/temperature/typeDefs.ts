import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Temperature {
    source(type: Source): Source,
    value: Float,
    dateTime: Float
  }

  enum Source {
    THERMOSTAT
    KITCHEN
    LIVING
    DINING
    LAN
    JADYN
    MASTER
  }

  extend type Query {
    temperatures(source: Source!): [Temperature]
  }
`;
