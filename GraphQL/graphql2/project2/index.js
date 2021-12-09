const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({
  typeDefs,
  resolver,
});
