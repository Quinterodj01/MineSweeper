'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = exports.Board = function () {
    function Board(numberOfRows, numberOfColumns, numberOfBombs) {
        _classCallCheck(this, Board);

        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfColumns * numberOfRows;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    _createClass(Board, [{
        key: 'flipTile',
        value: function flipTile(rowIndex, columnIndex) {

            if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
                console.log('This tile has aready been flipped!');
                return;
            } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
                this._playerBoard[rowIndex][columnIndex] = 'B';
            } else {
                this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
            }
            this._numberOfTiles--;
        }
    }, {
        key: 'getNumberOfNeighborBombs',
        value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
            var _this = this;

            var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

            var numberOfRows = this._bombBoard.length;
            var numberOfColums = this._bombBoard[0].length;

            var numberOfBombs = 0;

            neighborOffsets.forEach(function (offSet) {
                var neighborRowIndex = rowIndex + offSet[0];
                var neighborColumnIndex = columnIndex + offSet[1];
                if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColums) {

                    if (_this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                        numberOfBombs++;
                    }
                }
            });
            return numberOfBombs;
        }
    }, {
        key: 'hasSafeTiles',
        value: function hasSafeTiles() {
            return this._numberOfTiles !== this._numberOfBombs;
        }
    }, {
        key: 'print',
        value: function print() {

            console.log(this.playerBoard.map(function (row) {
                return row.join(' | ');
            }).join('\n'));
        }
    }, {
        key: 'playerBoard',
        get: function get() {
            return this._playerBoard;
        }
    }], [{
        key: 'generatePlayerBoard',
        value: function generatePlayerBoard(numberOfRows, numberOfcolums) {
            var board = [];
            //add Rows
            for (var i = 0; i < numberOfRows; i++) {
                //board[i] = " ";
                var row = [];
                for (var j = 0; j < numberOfcolums; j++) {
                    row.push(' ');
                    //board[i][j] = ' ';
                }
                board.push(row);
            }
            return board;
        }
    }, {
        key: 'generateBombBoard',
        value: function generateBombBoard(numberOfRows, numberOfcolums, numberOfBombs) {
            var board = [];
            //add Rows
            for (var i = 0; i < numberOfRows; i++) {
                //board[i] = " ";
                var row = [];
                for (var j = 0; j < numberOfcolums; j++) {
                    row.push(null);
                    //board[i][j] = ' ';
                }
                board.push(row);
            };
            //The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
            var numberOfBombsPlaced = 0;
            while (numberOfBombsPlaced < numberOfBombs) {
                var randomRowIndex = Math.floor(Math.random() * Math.floor(numberOfRows));
                var ramdomColIndex = Math.floor(Math.random() * Math.floor(numberOfcolums));
                if (board[randomRowIndex][ramdomColIndex] !== 'B') {
                    board[randomRowIndex][ramdomColIndex] = 'B';
                    numberOfBombsPlaced++;
                }
            }

            return board;
        }
    }]);

    return Board;
}();

;