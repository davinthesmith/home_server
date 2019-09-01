import { gql } from 'apollo-server';
import { mergeTypes } from 'merge-graphql-schemas';
import { typeDefs as hvac } from './hvac/typeDefs';

const typeDefs = gql`
  enum SqlSortOrder {
    asc
    desc
  }

`;

export default gql(mergeTypes([
  typeDefs,
  hvac
]));
