const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(

    {
        setup: String,
        punchLine: String,
    },
    {timestamps: true}
);

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;