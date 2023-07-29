class Cell{
    constructor(){
        this.mark = ''
    }

    isEmpty(){
        return this.mark == ''
    }

    markCell(symbol){
        return this.mark = symbol
    }
}

module.exports = Cell