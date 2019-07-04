import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { client } from './mqtt'
import { log } from './utils/logger'
import resolvers from './graphql/root/resolvers'
import typeDefs from './graphql/root/typeDefs'
import { APP_URL, APP_PORT } from './constants';

// setup Express
const app = express();

// setup ApolloServer and add to Express
const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => {
    log.error(error.message);
    return error;
  },
  formatResponse: (response: any) => {
    // don't log schema requests
    if (!response.data.__schema) log.info(response);
    return response;
  },
});
server.applyMiddleware({ app });

// start Mqtt client.  
// NOTE: Even though we don't use this reference, we need to set it up so TypeScript knows to include the Mqtt files
const mqtt = client;
// mqtt.end();

// start Express
app.listen({ port: APP_PORT }, () => {
  console.log(`🚀 Server ready at ${APP_URL}:${APP_PORT}${server.graphqlPath}`);
});
