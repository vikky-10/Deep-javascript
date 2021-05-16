<!-- 6CTcTh9BsOQhm3mS -->

🏷️Apollo Server is a library that helps you connect a GraphQL schema to an HTTP server in Node.js. It’s possible to use Apollo Server with all popular HTTP servers like Express, Connect, Hapi, Koa, Restify, and Lambda

🏷️In order to be able to use ES6 features in our Node.js code we need to set up the Babel compiler for our project. Enabling Babel is very easy, first you need to install the packages babel-cli and babel-preset-env via NPM:

$ npm install --save-dev babel-cli babel-preset-env

🏷️Starting the Babel compiler manually after every code change would be inconvenient. By using babel-watch we can automate this task and in addition making sure that the Node.js web server process is restarted as well
$ npm install babel-watch --save-dev

🔴Later on, when we’ve implemented the server in file server.js this will enable us to start the server by using the following command:

$ npm run dev

This command will then execute babel-watch which starts the Node.js server and makes sure that the Babel tarnspiler is running in watch mode as well. Everytime the implementation is changed the compilation is done automatically and the Node.js server is restarted again, so that everything is updated without needed to perform manual steps.

<!-- how to set up appollo server -->

🏷️ GraphQL schema

A schema describes the shape of your data graph. It defines a set of types with fields that are populated from your back-end data stores.

const { ApolloServer, gql } = require("apollo-server")
const axios = require("axios")

const typeDefs = gql`
type User {
id: ID
login: String
avatar_url: String
}

type Query {
users: [User]
}

🏷️ GraphQL resolvers
A resolver is a collection of functions that helps generate a response from a GraphQL query

const resolvers = {
Query: {
users: async () => {
try {
const users = await axios.get("https://api.github.com/users")
return users.data.map(({ id, login, avatar_url }) => ({
id,
login,
avatar_url,
}))
} catch (error) {
throw error
}
},
},

A resolver has to match the appropriate schema by name. Therefore, here users refers to the users query defined in our schema. It's a function that fetches the data from the API with the help of axios and returns as expected the id, the login, and the avatar_url.

🖌️And that operation can take time to complete. That's why async/await is used here to handle it.

  <!-- server creation -->

const server = new ApolloServer({
typeDefs,
resolvers,
})
// typeDefs: typeDefs,
// resolvers: resolvers
server.listen().then(({ url }) => console.log(`Server ready at ${url}`))

Here, we pass as a parameter an object that holds the schema and the resolver to ApolloServer to create the server and then listens to it. With that in place,


🏷️ actually appollo uses express as backend.
