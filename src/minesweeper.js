/*const printBoard = (board) => {
    console.log('Current board');
    console.log('');

    console.log(board[0].join(' | '));
    console.log(board[1].join(' | '));
    console.log(board[2].join(' | '));

};
const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);*/
/* Nuew code*/


const generatePlayerBoard = (numberOfRows, numberOfcolums) => {
    let board = [];
    //add Rows
    for(let i = 0; i < numberOfRows; i++){
        //board[i] = " ";
        let row = [];
        for(let j = 0; j< numberOfcolums; j++){
          row.push(' ');
            //board[i][j] = ' ';
        }
        board.push(row);
    }
    return board;
};

const generateBombBoard = (numberOfRows, numberOfcolums,numberOfBombs) => {
    let board = [];
    //add Rows
    for(let i = 0; i < numberOfRows; i++){
        //board[i] = " ";
        let row = [];
        for(let j = 0; j< numberOfcolums; j++){
          row.push(null);
            //board[i][j] = ' ';
        }
        board.push(row);
    };
    //The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs){
        //let randomRowIndex = Math.floor(Math.random() * Math.floor(numberOfRows));
       // let ramdomColIndex = Math.floor(Math.random()*Math.floor(numberOfcolums));
        board[Math.floor(Math.random() * Math.floor(numberOfRows))][Math.floor(Math.random()*Math.floor(numberOfcolums))] = 'B';
        numberOfBombsPlaced++;
    }
    
    
    
    return board;
};
const printBoard = board =>{

   console.log(board.map(row => 
              row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
console.log('Player Board');
printBoard(playerBoard);

console.log('Bomb Board');
printBoard(bombBoard);