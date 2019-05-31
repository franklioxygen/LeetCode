/**
 * 118. Pascal's Triangle
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [];
    let line = [];
    for (i = 0; i < numRows; i++) {
        for (j = 0; j <= i; j++) {
            if (i == 0 && j == 0) {
                line.push(1);
                continue;
            }
            if (j == 0) line.push(1);
            if (j == i) {
                line.push(1);
                continue;
            }
            if (j >= 1) line.push(res[i - 1][j - 1] + res[i - 1][j])
        }
        res.push(line);
        line = [];
    }
    return res;
};