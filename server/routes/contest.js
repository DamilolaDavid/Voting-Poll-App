const authMiddleware = require('../middleware/auth');
const router = require('express').Router();



// Secure route example 
router.get('/', authMiddleware.auth ,(req, res) => {
  res.json({ message: 'This is secure data' });
});
