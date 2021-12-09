const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

// when expree see /graphql routes it understand 
// ke we want to communicate with the graphql server
// we pass function in miiddleware
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
