const scoreboard = require('./score.js');

function winner() {
    let scores = scoreboard.players;
    let maxScore = 0
    let winner;
    for (let obj of scores) {
        if (obj.score > maxScore) {
            maxScore = obj.score
            winner = obj.player
        }
    } 
    console.log(`The winner is: ${winner}. Congrats!!!`)
}

module.exports = winner;
