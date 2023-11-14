const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contestSchema = new Schema(
    {
        constest_id: { type: String, required: true },
        constest_name: { type: String, required: true },
        number_of_contestants: {type: Number, required: true, default: 0},
        isActive: {type: Boolean, default: false},
        date_start: { type: Date },
        date_end: { type: Date, required: true,},
        winner: { type: String, default: "undefined" },
    },
    { timestamps: true }
);

const Contest = mongoose.model('Contest', contestSchema);

module.exports = Contest;
