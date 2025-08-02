class Knight {
    constructor(position, visitedSquares) {
        this.position = position
        this.visitedSquares = visitedSquares
    }
    get possibleMoves() {
        const moves = [[-1, +2], [+1, +2], [+2, -1], [+2, 1], [+1, -2], [-1, -2], [-2, -1], [-2, +1]]
        let possibleMoves = []
        for (let move of moves) {
            const movePosition = [move[0] + this.position[0], move[1] + this.position[1]]
            if (movePosition[0] <= 7 && movePosition[0] >= 0 && movePosition[1] <= 7 && movePosition[1] >= 0) {
                if (!this.visitedSquares.some(square => square[0] === movePosition[0] && square[1] === movePosition[1])) {
                    possibleMoves.push(movePosition)
                }
            }
        }
        return possibleMoves
    }
}


function knightMoves(start, end) {
    let moveQueue = [new Knight(start, [start])]
    while (moveQueue.length > 0) {
        let currentKnight = moveQueue.shift()
        if (currentKnight.position[0] === end[0] && currentKnight.position[1] === end[1]) {
            return currentKnight.visitedSquares
        }
        for (let move of currentKnight.possibleMoves) {
            const visitedSquares = currentKnight.visitedSquares.slice()
            visitedSquares.push(move)
            const newKnight = new Knight(move, visitedSquares)
            moveQueue.push(newKnight)
        }
    }
    return null
}

console.log(knightMoves([2,2], [7,7]))