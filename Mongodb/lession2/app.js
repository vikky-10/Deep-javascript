const mongoose = require("mongoose");

//connect to mongodb

mongoose
  .connect("mongodb://localhost:27017/geek", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful...."))
  .catch((err) => console.error(err));

//schema
//   A mongoose schema defines the structure of the document,
// default values, validation etc.

const geekSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  video: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});
//collection creation
const geekModel = new mongoose.model("Geeks", geekSchema);

//creating document or insert
const createdoc = async () => {
  try {
    const firstdoc = new geekModel({
      name: "Node",
      ctype: "Back end",
      video: "70",
      author: "vikky",
      active: true,
    });
    const result = await firstdoc.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createdoc();
