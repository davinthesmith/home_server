import { gql } from 'apollo-server';
import { mergeTypes } from 'merge-graphql-schemas';
import hvac from '../hvac';

const typeDefRoot = gql`
  type Query
  type Mutation
`;

export default gql(mergeTypes([
  typeDefRoot,
  hvac.typeDefs
]));
