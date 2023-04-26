const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [true, 'Player name is required!'],
        minLength: [2, 'Player name must be 2 characters or more!']
    }, 
    preferredPosition: {
        type: String,
        required: [true, 'Preferred Position is required!'],
        minLength: [2, 'Preferred Position must be 2 characters or more!']
    },
    gameOne: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    }, 
    gameTwo: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    }, 
    gameThree: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    }
}, {timestamps: true} )

const Player = mongoose.model('player', PlayerSchema);
module.exports = Player;