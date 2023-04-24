const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: [true, 'Author Name is required!'],
        minLength:[3,'Author name must be at least 3 characters!']
    }, 
}, {timestamps: true})

const Author = mongoose.model('author', AuthorSchema);
module.exports = Author;