const graphql = require("graphql");
const { result } = require("lodash");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

var books = [
  { name: "vikky", genre: "Fanasti", id: "1" },
  { name: "singh", genre: "Fanast", id: "2" },
  { name: "vgoa", genre: "Fanaic", id: "3" },
];

//  defineing the object type of name Book Type
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

// root query where we start  sometime it called query
// Rootquery responsible how we jump into the graph
// Starting Point

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get from the db/other source THIS CODE IS FIRE WE USER REQUEST FOR ANY BOOK
        return _.find(books, { id: args.id });
      },
    },
  },
});

// query for
// {
//   book(id: "2"){
//     name
//     genre
//     id
//   }
// }

// result
// {
//   "data": {
//     "book": {
//       "name": "singh",
//       "genre": "Fanast",
//       "id": "2"
//     }
//   }
// }

// Here I exporting root query scema
module.exports = new GraphQLSchema({
  query: RootQuery,
});
