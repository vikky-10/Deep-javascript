const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/authRoutes");
const cookieParser = require("cookie-parser");

const { requireAuth } = require("./middleware/authMiddleware");
const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());

app.use(cookieParser());
// view engine
app.set("view engine", "ejs");

// database connection
// const dbURI = 'mongodb+srv://shaun:test1234@cluster0.del96.mongodb.net/node-auth';
const dbURI = `mongodb+srv://jwt:crrvan4iU4rnTa0D@cluster0.8j3h5.mongodb.net/jwt`;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(3000, () => {
      `app is listening on 3000...`;
    })
  )
  .catch((err) => console.log(err));
// crrvan4iU4rnTa0D;
// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));

app.use(authRoutes);

// //cookies
// app.get("/set-cookies", (req, res) => {
//   res.setHeader("set-cookie", "newUsser=true");

//   res.cookie("newUser", false);
//   res.cookie("Tempuser", true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
//   //if cookie already exists it replace the value if not create new one

//   res.send("cookie set");
// });

// app.get("/read-cookies", (req, res) => {
//   const cookies = req.cookies;
//   console.log(cookies);
//   res.json(cookies);
// });
