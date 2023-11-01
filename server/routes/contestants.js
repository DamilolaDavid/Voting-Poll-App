// const authMiddleware = require('../middleware/auth');
const router = require('express').Router();
const Contestants = require('../models/contestants.model')



// Pull all contestants
router.route('/').get((req, res) => {
  Contestants.find()
        .then(contestants => res.json(contestants))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Pull all contestants
router.route('/add').post((req, res) => {
  const { contest_enrolled, email, first_name, last_name, phone, gender } = req.body;

  const contestant_id = "DAMI-" + Math.floor(Math.random() * 9999999999) + 10000000;

  const newContestant = Contestants({
    contest_enrolled: contest_enrolled,
    email:email,
    first_name: first_name,
    last_name: last_name,
    contestant_id: contestant_id,
    phone: phone,
    gender: gender
  });

  newContestant.save()
  .then(() => res.json('Contestant Added Successfully'))
  .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;