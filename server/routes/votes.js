const authMiddleware = require('../middleware/auth');
const router = require('express').Router();

router.use(authMiddleware);
// Secure route example 
router.route('/').get((req, res) => {
  res.json({ message: 'This is secure data' });
});

