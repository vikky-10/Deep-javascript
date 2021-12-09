//  createing a server

const { ApolloServer, gql } = require("apollo-server");

// define a typedefs or schema
const typeDefs = gql`
  type Country {
    name: String!
  }
  type Query {
    hello: String
    numberofappe: Int
    isCool: Boolean

    # what does it means  it means it accept string or null
    # if i not pass any value by default it is null
    # if you want not pass null add ! at the end
    checknullable: String

    # array of strings
    # newArr: [String]
    # it could be array of string or null but inside arr it not entertain null value inside array
    # newArr: [String!]

    # if you want it also not return null so add !
    newArr: [String!]!
    Cname: Country!
  }
`;
// resolver
const resolvers = {
  Query: {
    hello: () => {
      return "Welcome vikky hope you doing good!!";
    },
    numberofappe: () => {
      return 5;
    },
    isCool: () => {
      return false;
    },
    checknullable: () => {
      return;
    },
    newArr: () => {
      return ["Hello", "my", "Friend"];
      // return ["Hello", null, "Friend"];
      // return null;
    },
    Cname: () => {
      const Coun = {
        name: "India",
      };
      return Coun;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log("server is ready at " + url);
});
