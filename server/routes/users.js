const router = require('express').Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecretKey = process.env.JWT_SECRET; // Change this to a strong, secret key in production.

const User = require('../models/user.model')

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const { email, first_name, last_name, phone, gender } = req.body;

    const newUser = new User({
        email: email,
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        gender: gender
    })
    newUser.save()
        .then(() => res.json('Registered Successfully'))
        .catch(err => res.status(400).json('Error: ' + err));
})


// // Route to authenticate and get a JWT token
router.route('/authenticate').post((req, res) => {
    const { email, password } = req.body

    const user = User.findOne({email})
    .then(
         // Create a JWT token
        user => {
        const token = jwt.sign(
            { user: user},
            jwtSecretKey,
            { expiresIn: "1h" }
        );

        res.json({ token });}
    )
     .catch ( err =>res.status(401).json({ message: "Authentication failed", "error": err })
     )
})

// // Route to authenticate and get a JWT token
router.route('/logout').post((req, res) => {
    const { email, password } = req.body

    const user = User.findOne({email})
    .then(
         // Create a JWT token
        user => {
        const token = jwt.sign(
            { user: user},
            jwtSecretKey,
            { expiresIn: "1s" }
        );

        res.json({ token });}
    )
     .catch ( err =>res.status(401).json({ message: "Authentication failed", "error": err })
     )
})



module.exports = router;