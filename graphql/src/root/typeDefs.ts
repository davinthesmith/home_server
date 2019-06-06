import { gql } from 'apollo-server';
import { mergeTypes } from 'merge-graphql-schemas'
import temperature from '../temperature'

const typeDefRoot = gql`
  type Query
  type Mutation
`;

export default gql(mergeTypes([
  typeDefRoot,
  temperature.typeDefs
]))
