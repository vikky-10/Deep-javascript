const User = require("../models/user");

//handle errors
const handleError = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  //duplicate error code
  if (err.code === 11000) {
    errors.email = "This email is already registered";
    return errors;
  }

  //validation error
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};
module.exports.login_get = (req, res) => {
  res.render("login");
};
module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    //creating the user in the database
    //using create({schema})
    //it return a promise
    //it return a documents back
    const user = await User.create({ email, password });
    res.status(200).json(user);
  } catch (err) {
    const error = handleError(err);
    res.status(400).json(error);
  }
};

module.exports.login_post = async (req, res) => {
  //   console.log(req.body);
  const { email, password } = req.body;
  console.log(email, password);
  res.send("post log");
};
