'use strict';

var _game = require('./game');

var g = new _game.Game(3, 3, 3);
g.playMove(0, 1);

/*let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 6);
console.log('Player Board');
printBoard(playerBoard);

console.log('Bomb Board');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');
printBoard(playerBoard);*/