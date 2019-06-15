import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './root/resolvers'
import typeDefs from './root/typeDefs'

const APP_URL = process.env.APP_URL;
const APP_PORT = process.env.APP_PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: APP_PORT }, () => {
  console.log(`🚀 Server ready at ${APP_URL}:${APP_PORT}${server.graphqlPath}`)
});