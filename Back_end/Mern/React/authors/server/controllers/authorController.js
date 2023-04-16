const Author = require('../models/authorModel');

module.exports = {
    findAllAuthors: (req, res) => {
        Author.find()
            .then(allAuthors => {
                res.status(200).json(allAuthors)
            })
            .catch(err => {
                res.status(400).json(err);
            })
    },

    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => {
                res.status(200).json(newAuthor);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    }, 

    findOneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(oneAuthor => {
                res.status(200).json(oneAuthor);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    }, 
    
    updateAuthor: (req, res) => {
        Author.findOneThenUpdate({_id: req.params.id}, req.body, {new:true, runValidatods: true})
            .then(updatedAuthor => {
                res.status(200).json(updatedAuthor);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    }, 

    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }

}
