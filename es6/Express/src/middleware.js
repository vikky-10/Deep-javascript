//  🔥 middleware
// Express middleware are functions that run after a request is received but before the route handler function. Middleware functions have access to the request object, response object, and a function called next to pass control to the next middleware function or to the route handler

// 🏷️  Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

// Middleware functions can perform the following tasks:

// 🔴 Execute any code.
//  🔴 Make changes to the request and the response objects.
//  🔴 End the request-response cycle.
//  🔴 Call the next middleware function in the stack.

// 🏷️ If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

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
// standard function pass to app.get()
const urlLogger = (request, response, next) => {
  console.log("Request URL:", request.url);
  next();
};
app.get("/", (req, res, next) => {
  res.send("<h1>Hello everyone</h1>");
});

app.get("/midd", urlLogger, (request, response) => {
  response.status(200).json({ name: "vikky" });
  response.json();
});
console.dir(app.locals.x);

app.listen(5000, () => {
  console.log("listening to :", 5000);
});
