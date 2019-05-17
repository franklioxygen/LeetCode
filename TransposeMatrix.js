/**
 * 867. Transpose Matrix
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    let res = [];
    let line = [];

    for (i = 0; i < A[0].length; i++) {
        for (j = 0; j < A.length; j++) {
            line.push(A[j][i]);
        }
        res.push(line);
        line = [];
    }
    return res;

};