import { ApolloServer } from 'apollo-server-express';
import { log } from '../utils/logger'
import resolvers from './resolvers';
import typeDefs from './typeDefs';

// setup ApolloServer and add to Express
export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => {
    log.error(error.message);
    return error;
  },
  formatResponse: (response: any) => {
    // don't log schema requests or errors
    if ((!response.data || !response.data.__schema) && !response.errors) log.info(response);
    return response;
  },
});
