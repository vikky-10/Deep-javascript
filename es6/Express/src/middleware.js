//  🔥 middleware
// Express middleware are functions that run after a request is received but before the route handler function. Middleware functions have access to the request object, response object, and a function called next to pass control to the next middleware function or to the route handler

// 🏷️ creating our own middleware

// basic structure of middleware
// const middlewareFuncName = (request, response, next) => {
//   // Middleware code to run here
//   // Move on to next middleware function or the route handler
//   next();
// };

// example

const express = require("express");
var x = 14;

const app = express();

const urlLogger = (request, response, next) => {
  console.log("Request URL:", request.url);
  next();
};

app.get("/midd", urlLogger, (request, response) => {
  response.status(200).json({ name: "vikky" });
  response.json();
});
console.dir(app.locals.x);

app.listen(5000, () => {
  console.log("listening to :", 5000);
});
