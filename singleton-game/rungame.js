const scoreboard = require('./score.js');


let rounds = 0;
function rungame(player, points) {
    rounds++
    console.log(`👾👾👾👾👾👾👾 ROUND ${rounds} 👾👾👾👾👾👾👾\n`)
    player.modifyScore(points);
    scoreboard.addPlayer(player.name, player.score)
    scoreboard.printScore()

}

module.exports = rungame;