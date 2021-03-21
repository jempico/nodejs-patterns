var uniqid = require('uniqid');

class Player {
    constructor(name, surname) {
        this.id = uniqid();
        this.name = name;
        this.surname = surname
        this.score = 0;
    }
    introduce() {
        console.log(`Hi! My name is ${this.name} ${this.surname}.`)
    }
    modifyScore(points){
        this.score += points;
    }
    getScore() {
        return this.score;
    }
}

module.exports = Player;