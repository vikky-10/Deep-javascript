const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating schema for the model

const mariocharSchema = new Schema({
  name: String,
  weight: Number,
});

//model
const Mariochar = mongoose.model("mariochar", mariocharSchema);

//mariochar ==>collectioname
// everytime we create a new model in mariochar collection having mariocharSchema schema

module.exports = Mariochar;
