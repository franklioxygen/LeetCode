/**
 * 598. Range Addition II
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    for (i in ops) {
        m = m > ops[i][0] ? ops[i][0] : m;
        n = n > ops[i][1] ? ops[i][1] : n;
    }
    return m * n;
};