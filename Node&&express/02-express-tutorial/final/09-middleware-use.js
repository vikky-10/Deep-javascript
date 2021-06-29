const express = require("express");
const app = express();
const logger = require("../methods-public/logger");
const authorize = require("../methods-public/authorize");
//  req => middleware => res

// multiple middlewares
//order metters
//if logger first then logger execute first then authorize
app.use([logger, authorize]);

//all route having path start with /api use this logger middleware
// app.use("/api", logger);
// api/home/about/products
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  // console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
