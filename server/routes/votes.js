// const authMiddleware = require('../middleware/auth');
const router = require("express").Router();

const Vote = require("../models/votes.model");

const Contestant = require("../models/contestants.model");

// router.use(authMiddleware);

router.route("/").get((req, res) => {
  Vote.find()
  .then(votes => res.json(votes))
  .catch(err => res.status(400).json('Error: ' + err));
});

// Secure route example
router.route("/:id").get((req, res) => {
  // const uid = req.params.id || null;
  // console.log(uid)
  // res.json({ message: 'This is get user votes API' });
});

router.route("/vote").post((req, res) => {
  const { contest_id, voter_id, contestant_id, point } = req.body;

  const contestant = Contestant.findById(contestant_id);

  Contestant.findOne({ contestant_id: contestant_id })
    .then((foundContestant) =>
      Contestant.updateOne(
        { _id: foundContestant._id },
        { votes: foundContestant.votes + parseInt(point) }
      )
    )
    .then(() => Contestant.findOne({ contestant_id: contestant_id }))
    .then((updatedContestant) => console.log(updatedContestant.votes)) // 'Neo'
    .then(() =>
      res.json(
        "Voted for contestant: " +
          updatedContestant.first_name +
          " " +
          updatedContestant.last_name +
          " Successfully"
      )
    )
    .catch((err) => res.status(400).json("Error: " + err));

  //Next log this vote to votes table

  const newVote = new Vote({
    contest_id: contest_id,
    voter_id: voter_id,
    contestant_id: contestant_id,
    point: point,
  });
  newVote.save();
  // .then(() => res.json('Vote Logged Successfully'))
  // .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
