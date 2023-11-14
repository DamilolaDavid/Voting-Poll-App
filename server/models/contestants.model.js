const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contestantSchema = new Schema(
    {
        contest_enrolled: { type: String, required: true },
        email: { type: String, required: true },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        contestant_id: {type: String, unique:true, required: true},
        votes: { type: Number, default: 0 },
        phone: { type: Number, required: true, unique: true, trim: true },
        gender: { type: String, default: "undefined" },
        image: { type: String, default: "/default_image.png" },
    },
    { timestamps: true }
);

const Contestant = mongoose.model('Contestant', contestantSchema);

module.exports = Contestant;
