const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    # nationality: String!
    nationality: Nationality
    friends: [User]
  }

  type Query {
    users: [User!]!
    user(id: ID): User!
  }

  # ENUM
  enum Nationality {
    INDIA
    CANADA
    BRAZIL
    GERMANY
    CHILE
  }
`;

module.exports = { typeDefs };
