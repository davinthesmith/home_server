import { ApolloServer } from 'apollo-server';
import resolvers from './root/resolvers'
import typeDefs from './root/typeDefs'

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});