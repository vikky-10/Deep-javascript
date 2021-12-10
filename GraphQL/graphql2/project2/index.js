const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolver");
// const { UserList } = require("./FakeData");
// const resolvers = {
//   Query: {
//     users() {
//       return UserList;
//     },
//   },
// };
console.log(resolvers);
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Your Api is listening on" + url);
});
