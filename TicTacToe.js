const Board = require("./Board")
const Player = require("./Player")

class TicTacToe{
    constructor(board, player1, player2){
        this.board = board
        this.player1 = player1
        this.player2 = player2
        this.turn = 0
        this.isGameOver = false
    }

    static newTicTacToe(player1Name, player2Name){
        if(typeof player1Name != "string" || typeof player2Name != "string"){
            return "invalid input type for Player Name"
        }
        let board = new Board()
        let player1 = new Player(player1Name, "X")
        let player2 = new Player(player2Name, "O")
        return new TicTacToe(board, player1, player2)
    }

    play(cellNumber){
        if(this.isGameOver){
            return "GAME OVER !!"
        }

        if(typeof cellNumber !="number" || (cellNumber<0 && cellNumber>8)){
            return "Invalid input for Cell Number"
        }
        
        let isCellEmpty = this.board.isEmpty(cellNumber)

        if(!isCellEmpty){
            return "Cell is already filled"
        }

        let currentPlayer

        if(this.turn % 2 == 0){
            currentPlayer = this.player1
        }
        else{
            currentPlayer = this.player2
        }

        this.turn++

        currentPlayer.markCell(this.board.cells[cellNumber])

        this.board.printBoard()

        let analyzeWinner = this.board.analyse()

        let [winnerSymbol, gameState] = this.board.checkWinner(currentPlayer.symbol, analyzeWinner)

        if(gameState == ""){
            return "Continue playing.........."
        }
        if(gameState == "win"){
            if(winnerSymbol == "X"){
                this.isGameOver = true
                return this.player1.name + " is winner"
            }
            else{
                this.isGameOver = true
                return this.player2.name + " is winner"
            }
        }
        if(gameState == "draw"){
            return "Game Draw"
        }
    }
}

let g1 = TicTacToe.newTicTacToe("rohan", "sarvesh")
console.log(g1.play(0))
console.log(g1.play(3))
console.log(g1.play(1));
console.log(g1.play(4));
console.log(g1.play(2));
console.log(g1.play(7));
