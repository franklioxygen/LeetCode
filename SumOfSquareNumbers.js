/**
 * 633. Sum of Square Numbers
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let sqSet = new Set();
    for (i = 0; Math.pow(i, 2) <= c; i++) sqSet.add(Math.pow(i, 2));
    for (val of sqSet)
        if (sqSet.has(c - val)) return true;
    return false;
};