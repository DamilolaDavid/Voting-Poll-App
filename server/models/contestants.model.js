const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contestantSchema = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        contest_id: {type: Number, required: true},
        votes: { type: Number },
        phone: { type: Number, required: true, unique: true, trim: true },
        gender: { type: String, default: "undefined" },
    },
    { timestamps: true }
);

const Contestant = mongoose.model('Contestant', contestantSchema);

module.exports = Contestant;
