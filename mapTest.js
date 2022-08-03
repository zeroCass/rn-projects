const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const array2 = array.map((row, idxRow) => {
    return row.map((content, idx) => {
        return content * idx + 1
    })
})

console.log(array2)