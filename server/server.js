// app.js
const express = require("express");

require("dotenv").config();

// const bodyParser = require('body-parser'); //NOT NEEDED ANYMORE. JSON IS NOW INCLUDED WITH EXPRESS

const app = express();
const port = process.env.PORT || 3300;

const cors = require("cors");
const mongoose = require("mongoose");

// Middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRoute = require('./routes/users')

const contestRoute = require('./routes/contest')

const contestantsRoute = require('./routes/contestants')

const votesRoute = require('./routes/votes')

// In-memory user storage (for the sake of this example)
const users = [
  { id: 1, username: "peter", password: "gpezeka" },
  { id: 2, username: "admin", password: "admin" },
];

app.use('/users', usersRoute);

app.use('/contestants', contestantsRoute);

app.use('/votes', votesRoute);

// // Route to register a user
// app.post("/register", (req, res) => {
//   const { username, password } = req.body;
//   const newUser = { id: users.length + 1, username, password };
//   users.push(newUser);
//   res.json({ message: "User registered successfully" });
// });

// // Route to authenticate and get a JWT token


// // Protected route for dashboard
// app.get("/dashboard", (req, res) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res
//       .status(401)
//       .json({ message: "Authentication token is required" });
//   }

//   // Verify the token and check for expiration
//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       if (err.name === "TokenExpiredError") {
//         // Token has expired, generate a new one and send it to the client.
//         const newToken = jwt.sign(
//           { username: decoded.username, id: decoded.id },
//           secretKey,
//           { expiresIn: tokenExpirationTime }
//         );
//         res.json({ message: "New token generated", token: newToken });
//       } else {
//         res.status(401).json({ message: "Invalid token" });
//       }
//     } else {
//       res.json({ message: "Access granted!", user: decoded });
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
