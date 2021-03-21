const Player = require('./player.js');

function playerFactory(name, surnname) {
    return new Player(name, surnname)
}

module.exports = playerFactory;