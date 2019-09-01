import express from 'express';
import { apolloServer } from './graphql/apollo'
import { client } from './mqtt';
import router from './express/routes';
import { APP_URL, APP_PORT } from './constants';

// setup Express
const app = express();

// attach ApolloServer
apolloServer.applyMiddleware({ app, path: '/graphql' });

// start Mqtt client.  
// NOTE: Even though we don't use this reference, we need to set it up so TypeScript knows to include the Mqtt files
const mqtt = client;
// mqtt.end();

// connect express router
app.use("/", router);

// start Express
app.listen({ port: APP_PORT }, () => {
  console.log(`🚀 Server ready at ${APP_URL}:${APP_PORT}${apolloServer.graphqlPath}`);
});
