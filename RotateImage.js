/**
 * 48. Rotate Image
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let stack = [];
    for (i = 0; i < matrix.length; i++)
        for (j = 0; j < matrix[0].length; j++) stack.push(matrix[i][j]);
    for (j = matrix[0].length - 1; j >= 0; j--)
        for (i = 0; i < matrix.length; i++) matrix[i][j] = stack.shift()
};