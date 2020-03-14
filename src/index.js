// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    for (let k in matrix) {
        if (k % 2 !== 0) {
            for (let i = matrix[k].length - 1; i >= 0; i--) {
                res.push(matrix[k][i])
            }
            continue;
        }
        for (let n in matrix[k]) {
            res.push(matrix[k][n])
        }
    }
    return res;
}
