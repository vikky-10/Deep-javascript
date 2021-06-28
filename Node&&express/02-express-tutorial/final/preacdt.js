const express = require("express");
const path = require("path");

const app = express();

// setup static and middleware
app.use(express.static("../public"));

//static assets means the assets server doesnot need to change it

app.get("/", (req, res) => {
  //this is wrong way
  //  res.send("../navbar-app/index.html");
  //this is also wrong
  //   res.send(path.resolve(__dirname, "../navbar-app/index.html"));

  res.sendFile(path.resolve(__dirname, "../navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
