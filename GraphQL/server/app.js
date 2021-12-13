const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

// when expree see /graphql routes it understand
// ke we want to communicate with the graphql server
// we pass function in miiddleware

mongoose
  .connect(
    "mongodb+srv://GraphQL:OGNg4w9IL87msaMZ@cluster0.7qvg4.mongodb.net/lib",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("listening to port 4000...");
});
