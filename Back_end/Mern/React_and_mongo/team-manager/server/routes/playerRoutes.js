const PlayerController = require('../controllers/playerController');


module.exports = app => {
    app.get('/api/players', PlayerController.findAllPlayers);
    app.post('/api/newPlayer', PlayerController.createPlayer);
    app.get('/api/onePlayer/:id', PlayerController.findOnePlayer);
    app.put('/api/updatePlayer/:id', PlayerController.updatePlayer);
    app.delete('/api/deletePlayer/:id', PlayerController.deletePlayer);
}