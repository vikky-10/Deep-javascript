const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   console.log("home");
//   res.send("Home Page");
// });
app.get("/", (req, res, next) => {
  console.log("home");
  res.send("Home Page");
  next();
});
//only home is printed because no next() method is call inside  .get
// if i can add next in.get so is call next middleware

app.get("/users", (req, res) => {
  console.log("user");
  res.send("Users Page");
});

// this middleware is not called
app.use(loggingMiddleware);
function loggingMiddleware(req, res, next) {
  console.log("Inside Middleware");
  next();
}
// app.use(loggingMiddleware);
app.listen(3000, () => console.log("Server Started"));
