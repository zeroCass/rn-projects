const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                mined: false,
                opened: false,
                flagged: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}


const spreadMines = (board, minesAcount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0
    while (minesPlanted < minesAcount) {
        const row = parseInt(Math.random() * rows, 10)
        const column = parseInt(Math.random() * columns, 10)

        if (!board[row][column].mined) {
            board[row][column].mined = true
            minesPlanted++
        }
    }
}


const createMineBoard = (rows, columns, minesAcount) => {
    const board = createBoard(rows, columns)
    spreadMines(board, minesAcount)
    return board
}


const cloneBoard = (board) => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}


const getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [column - 1, column, column + 1]
    rows.forEach(r => {
        columns.forEach(c => {
            const equals = r == row && c == column
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board[0].length
            if (!equals && validRow && validColumn) {
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors
}


const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbors) => result && !neighbors.mined
    const neighbors = getNeighbors(board, row, column)
    const safeNeighbors = neighbors.reduce(safes, true)
    return safeNeighbors
}


const openField = (board, row, column) => {
    const field = board[row][column]
    if (!field.opened) {
        field.opened = true
        
        if (field.mined) { 
            field.exploded = true
            return 
        }

        if (safeNeighborhood(board, row, column)) {
            getNeighbors(board, row, column)
                .forEach(n => openField(board, n.row, n.column))
        }else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}


const fields = board => [].concat(...board)
const hadExplosion = board => fields(board).filter(n => n.exploded).length > 0
const pedding = field =>  (!field.mined && !field.opened) || (field.mined && !field.flagged)
const wonGame = board => fields(board).filter(pedding).length === 0
const showMines = board => fields(board)
    .filter(field => field.mined)
    .forEach(field => field.opened = true)

const invertFlag = (board, row, column) => {
    const field = board[row][column]
    field.flagged = !field.flagged

}

const flaggUsed = board => fields(board).filter(field => field.flagged).length

export { 
    createMineBoard, 
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flaggUsed
}