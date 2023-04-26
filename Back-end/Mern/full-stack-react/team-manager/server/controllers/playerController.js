const  Player = require('../models/playerModel');

module.exports = {

    findAllPlayers: (req,res) => {
        Player.find()
            .then(allPlayers => {
                res.status(200).json(allPlayers);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    },

    createPlayer: (req, res) => {
        Player.create(req.body)
            .then(newPlayer => {
                res.status(200).json(newPlayer);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    },

    findOnePlayer: (req, res) => {
        Player.findOne({_id: req.params.id})
        .then(player => {
            res.status(200).json(player);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    },

    updatePlayer: (req, res) => {
        Player.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
            .then(updatePlayer => {
                res.status(200).json(updatePlayer);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    }, 

    deletePlayer: (req, res) => {
        Player.deleteOne({_id: req.params.id})
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
}