const AuthorController = require('../controllers/authorController');

module.exports = app => {
    app.get('/api/allAuthors', AuthorController.findAllAuthors);
    app.post('/api/newAuthor', AuthorController.createAuthor);
    app.get('/api/oneAUthor/:id', AuthorController.findOneAuthor);
    app.put('/api/updateAuthor/:id', AuthorController.updateAuthor);
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor);
}