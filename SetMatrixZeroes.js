/**
 * 73. Set Matrix Zeroes
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let col = new Set();
    let row = new Set();
    for (i = 0; i < matrix.length; i++)
        for (j = 0; j < matrix[0].length; j++)
            if (matrix[i][j] == 0) {
                col.add(j);
                row.add(i);
            }
    for (pos of col)
        for (i = 0; i < matrix.length; i++) matrix[i][pos] = 0;
    for (pos of row) matrix[pos] = Array(matrix[pos].length).fill(0);
};