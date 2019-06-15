import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { log } from './utils/logger'
import resolvers from './root/resolvers'
import typeDefs from './root/typeDefs'
import { APP_URL, APP_PORT } from './constants';

// setup Express
const app = express();

// setup ApolloServer and add to Express
const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => {
    log.error(error);
    return error;
  },
  formatResponse: (response: any) => {
    log.info(response);
    return response;
  },
});
server.applyMiddleware({ app });

// start Express
app.listen({ port: APP_PORT }, () => {
  console.log(`🚀 Server ready at ${APP_URL}:${APP_PORT}${server.graphqlPath}`);
});
