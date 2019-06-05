import { gql } from 'apollo-server';
import temperature from '../temperature'

const typeDefRoot = gql`
  type Query
`;

export default [
  typeDefRoot,
  temperature.typeDefs
]
