const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {type: String, required: true, unique: true},
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        voted: { type: Array, default: []},
        phone: { type: Number, required: true, unique: true, trim: true },
        gender: { type: String, default: "undefined" },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
