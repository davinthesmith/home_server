import { ApolloServer } from 'apollo-server';
import { MongoClient } from 'mongodb';
import resolvers from './root/resolvers'
import typeDefs from './root/typeDefs'

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const db = MongoClient.connect(
  `mongodb://${process.env.MONGO_URL}:27017/db`,
  (err, db) => {
    if (err) throw err;
    console.log("Database connected!");
  }
)

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});