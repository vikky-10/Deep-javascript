const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
});

//FIRE A FUNCTION AFTER DOC IS SAVE IN THE DATABASE
// mongoose hook to protect the password

//HERE POST IS NOT HTTP REQUEST
//IT IS MONGOOSE HOOK
// userSchema.post("save", function (doc, next) {
//   console.log("new user is created", doc);
//   next();
// });

//FIRE A FUNCTION  BEFORE DOC IS SAVE IN THE DATABASE
//this refer to   instance of  create function
//only next inside in parameter because doc is not save yet
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//creating a model/collection
const User = mongoose.model("user", userSchema);

module.exports = User;
