import { gql } from 'apollo-server';
import { mergeTypes } from 'merge-graphql-schemas'
import temperature from '../temperature'

const typeDefRoot = gql`
  type Query
`;

export default mergeTypes([
  typeDefRoot,
  temperature.typeDefs
])
