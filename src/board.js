export class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfColumns * numberOfRows;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard() {
        return this._playerBoard;

    }

    flipTile(rowIndex, columnIndex) {

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

    getNumberOfNeighborBombs(rowIndex, columnIndex) {

        const neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

        const numberOfRows = this._bombBoard.length;
        const numberOfColums = this._bombBoard[0].length;

        let numberOfBombs = 0;

        neighborOffsets.forEach(offSet => {
            let neighborRowIndex = rowIndex + offSet[0];
            let neighborColumnIndex = columnIndex + offSet[1];
            if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColums) {

                if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                    numberOfBombs++;
                }

            }

        });
        return numberOfBombs;
    }
    hasSafeTiles() {
        return this._numberOfTiles !== this._numberOfBombs;

    }

    print() {

        console.log(this.playerBoard.map(row =>
            row.join(' | ')).join('\n'));
    }
    static generatePlayerBoard(numberOfRows, numberOfcolums) {
        let board = [];
        //add Rows
        for (let i = 0; i < numberOfRows; i++) {
            //board[i] = " ";
            let row = [];
            for (let j = 0; j < numberOfcolums; j++) {
                row.push(' ');
                //board[i][j] = ' ';
            }
            board.push(row);
        }
        return board;
    }
    static generateBombBoard(numberOfRows, numberOfcolums, numberOfBombs){
        let board = [];
        //add Rows
        for (let i = 0; i < numberOfRows; i++) {
            //board[i] = " ";
            let row = [];
            for (let j = 0; j < numberOfcolums; j++) {
                row.push(null);
                //board[i][j] = ' ';
            }
            board.push(row);
        };
        //The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
        let numberOfBombsPlaced = 0;
        while (numberOfBombsPlaced < numberOfBombs) {
            let randomRowIndex = Math.floor(Math.random() * Math.floor(numberOfRows));
            let ramdomColIndex = Math.floor(Math.random() * Math.floor(numberOfcolums));
            if (board[randomRowIndex][ramdomColIndex] !== 'B') {
                board[randomRowIndex][ramdomColIndex] = 'B';
                numberOfBombsPlaced++;
            }

        }

        return board;
    }
};
