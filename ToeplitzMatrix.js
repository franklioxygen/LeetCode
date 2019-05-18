/**
 * 766. Toeplitz Matrix
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    for (i = 0; i < matrix.length - 1; i++) {
        for (j = 0; j < matrix[0].length - 1; j++) {
            if ((i == 0 && j == matrix[0].length - 1) && (i == matrix.length - 1 && j == 0)) continue;
            if (matrix[i][j] != matrix[i + 1][j + 1]) return false;
        }
    }
    return true;
};