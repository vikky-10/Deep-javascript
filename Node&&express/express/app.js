const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("this is a get request");
});
app.get("/:id", (req, res) => {
  const a = req.params;

  console.log(a);
  res.send("this is a get request");
});

app.listen("5000", () => {
  console.log("server is running at 5000....");
});
