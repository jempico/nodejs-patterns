class Scoreboard {
    constructor() {
        if (Scoreboard.instance == null) {
            this.players = [];
            Scoreboard.instance = this
        } 
        return Scoreboard.instance
    }
    addPlayer(name, points) {
        let found = this.players.findIndex((x) => x.player == name)
        
        if (found == -1) {
            this.players.push({player: name, score: points})
            console.log(`${name} has been added with ${points} points`)
        } else {
            this.players[found].score = points
            console.log(`${name} has a new score: ${points} points`)

        }
    }
    printScore(){

console.log(`
---------- 🏆 SCOREBOARD 🏆 ----------
`);

for (let obj of this.players) {
console.log(`
${obj.player} => ${obj.score} points
`)
} 

console.log(`
--------------------------------------

`)
    }
} 

const scoreboard = new Scoreboard();

Object.freeze(scoreboard)

module.exports = scoreboard;
