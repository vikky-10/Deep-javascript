const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "vikky") {
    req.user = { name: "vikky", id: "3" };
    next();
  } else {
    res.status(401).send("Unothized");
  }
};
module.exports = authorize;
