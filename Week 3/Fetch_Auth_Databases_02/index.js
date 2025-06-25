const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "pankajbirla@gmail.com",
    password: "123",
    name: "Pankaj Birla",
  },
  {
    username: "sanskarpatidar@gmail.com",
    password: "123321",
    name: "Sanskar Patidar",
  },
  {
    username: "shivamsingh@gmail.com",
    password: "12345",
    name: "Shivam Singh",
  },
];
//we can use find also here
function userExists(username, password) {
  let userExists = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username == username &&
      ALL_USERS[i].password == password
    ) {
      userExists = true;
    }
  }

  return userExists;
}

// function usersList(username) {
//   let listOfUsers = [];
//   for (let i = 0; i < ALL_USERS.length; i++) {
//     if (ALL_USERS[i].username != username) {
//       listOfUsers.push(ALL_USERS[i]);
//     }
//   }
//   return listOfUsers;
// }

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
