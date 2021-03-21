const playerFactory = require('./playerFactory.js');
const rungame = require('./rungame.js');
const winner = require('./winner.js')

//Creating instances of Player through playerFactory

const player1 = playerFactory('John', 'Snow');
const player2 = playerFactory('Danerys', 'Targaryen');
const player3 = playerFactory('Tyrion', 'Lannister');


//Running game

rungame(player1, 50);
rungame(player1, -25);
rungame(player2, 100);
rungame(player2, 50);
rungame(player1, -25);
rungame(player2, 50);
rungame(player3, 500);

//Choosing winner
winner();