const { ApolloServer } = require('apollo-server');
import schema from './schema'
import resolvers from './resolver'

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});