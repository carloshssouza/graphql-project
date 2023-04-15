import { gql } from "apollo-server";

const { ApolloServer } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
  }
`
const resolvers = {
  Query: {
    hello: () => 'Hello World'
  }
}


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: any) => {
  console.log(`Server ready at ${url}`);
});