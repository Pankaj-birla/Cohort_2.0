const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456"

const app = express();
app.use(express.json());

const uri = process.env.MONGO_URL;
// Connect to MongoDB
mongoose.connect(uri);

const User = mongoose.model("User", {
    name: String,
    username : String,
    password : String,
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User Doesn't exist in our memory DB",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    return res.json({
      "List of users": ALL_USERS.filter((value) => {
        if (value.username == username) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid Token",
    });
  }
});

app.listen(3000);
