const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const votesSchema = new Schema(
    {
        contest_id: {type: String, required: true},
        voter_id: { type: String, required: true },
        constestant_id: { type: String, required: true },
        point: { type: Number, required: true },
        date: { type: Date, required: true },
    },
    { timestamps: true }
);

const Votes = mongoose.model('Votes', votesSchema);

module.exports = Votes;
