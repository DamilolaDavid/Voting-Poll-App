// middleware/auth.js
const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports auth = (req, res, next) => {
  try {
    const jwtSecretKey = process.env.JWT_SECRET;

    const token = req.headers.authorization.split(' ')[1];

    const decoded = jwt.verify(token, jwtSecretKey);
    
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failed' });
  }
};
