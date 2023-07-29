const Cell = require("./Cell")

class Board{
    constructor(){
        this.cells = [new Cell, new Cell, new Cell, new Cell, new Cell, new Cell, new Cell, new Cell, new Cell]
    }

    isEmpty(cellNumber){
        return this.cells[cellNumber].isEmpty()
    }

    printBoard(){
        console.log(this.cells);
    }
    
    analyse(){
        if(this.cells[0].mark !== '' && this.cells[0].mark === this.cells[1].mark && this.cells[0].mark === this.cells[2].mark){
            return true
        }

        if(this.cells[3].mark !== '' && this.cells[3].mark === this.cells[4].mark && this.cells[3].mark === this.cells[5].mark){
            return true
        }

        if(this.cells[6].mark !== '' && this.cells[6].mark === this.cells[7].mark && this.cells[6].mark === this.cells[8].mark){
            return true
        }

        if(this.cells[0].mark !== '' && this.cells[0].mark === this.cells[4].mark && this.cells[0].mark === this.cells[8].mark){
            return true
        }

        if(this.cells[2].mark !== '' && this.cells[2].mark === this.cells[4].mark && this.cells[2].mark === this.cells[6].mark){
            return true
        }
        let isDraw = true
        for(let i=0; i<9; i++){
            if(this.cells[i].mark === ''){
                isDraw = true
                return false
            }
        }
        if(isDraw == true){
            return 'T'
        }
    }

    checkWinner(symbol, analyzeWinner){
        if(analyzeWinner){
            return [symbol, "win"]
        }
        if(analyzeWinner == 'T'){
            return ["", "draw"]
        }
        return ["", ""]

    }
}

module.exports = Board