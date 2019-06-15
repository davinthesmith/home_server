import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './root/resolvers'
import typeDefs from './root/typeDefs'
import { APP_URL, APP_PORT } from './constants';
import { requestLogger, errorLogger } from './middleware/logger';

// setup Express
const app = express();

// add logging middleware
app.use(requestLogger);
app.use(errorLogger);

// setup ApolloServer and add to Express
const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.applyMiddleware({ app });

// start Express
app.listen({ port: APP_PORT }, () => {
  console.log(`🚀 Server ready at ${APP_URL}:${APP_PORT}${server.graphqlPath}`);
});
