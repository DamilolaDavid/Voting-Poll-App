// const authMiddleware = require('../middleware/auth');
const router = require('express').Router();

const Contest = require('../models/contest.model')

// router.use(authMiddleware);
// Secure route example 
router.route('/').get((req, res) => {
  const uid = req.params.id || null;
  console.log(uid)

  res.json({ message: 'This is get user votes API' });
});

