/**
 * 1030. Matrix Cells in Distance Order
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
    let res = [];
    for (i = 0; i < R; i++)
        for (j = 0; j < C; j++) res.push([Math.abs(i - r0) + Math.abs(j - c0), [i, j]]);
    res.sort((a, b) => {
        return a[0] - b[0]
    });
    for (i = 0; i < res.length; i++) res[i] = res[i][1];
    return res;
};