const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, "net ninja secret", (err, decodedtoken) => {
      if (err) {
        console.log(err);
        res.redirect("/login");
      } else {
        console.log(decodedtoken);
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

module.exports = { requireAuth };
