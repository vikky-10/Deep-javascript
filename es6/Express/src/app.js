//  importing the express modules
// Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.
// 🔴 feature ref: https://medium.com/@jaeger.rob/introduction-to-nodes-express-js-db5617047150
const path = require("path");
const express = require("express");

//  for creating express application need to exporting the express()
const app = express();

//  🥍The first line requires the Express module that was installed via NPM, and the second line sets up our Express application. With this application (app), you can configure and add functionality to your server.

const port = 8000;

// route handler
// app.get() creates a route handler to listen for GET requests from a client.
// app.get("/", (req, res) => {
//   res.send("hello from the express");
// });
// const staticpath = path.join(__dirname, "../public");
//  built in middleware
// one way
// app.use(express.static(staticpath));

// 2nd way
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
//   // res.send();
// });

// send html data
// app.get("/", (req, res) => {
//   res.write("<h1>hello </h1>");
//   res.send();
// });

// pass json 1way
// app.get("/temp", (req, res) => {
//   res.write({
//     name: "vikky",
//     id: 1,
//   });
//   res.send();
// });

// 2nd way
// app.get("/temp", (req, res) => {
//   res.json({
//     name: "vikky",
//     id: 1,
//   });
//   res.send();
// });

// The methods are identical when an object or array is passed
// but  res.json() will also convert non-objects, such as null and undefined, which are not valid JSON.

// app.get("/temp", (req, res) => {
//   res.json({
//     name: "vikky",
//     id: 1,
//   });
//   res.send();
// });

// const obj = {
//   name: "vikky",
//   class: 12,
// };
// console.log(obj);
app.listen(port, () => {
  console.log("listening to the", port);
});

// The app.listen() function tells the server to start listening for connections on a particular port, in this case port 3000.
