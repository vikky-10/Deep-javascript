const mongoose = require("mongoose");

//connect to mongodb

mongoose.connect("mongodb://localhost/testaroo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", function () {
    console.log("connection are made now make fireworks....");
  })
  .on("error", function (err) {
    console.log("Connection error: " + err);
  });
