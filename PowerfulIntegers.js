/**
 * 970. Powerful Integers
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
    let res = new Set();
    for (i = 0; Math.pow(x, i) <= bound && i < bound; i++) {
        for (j = 0; Math.pow(y, j) <= bound && j < bound; j++) {
            if (Math.pow(x, i) + Math.pow(y, j) <= bound) res.add(Math.pow(x, i) + Math.pow(y, j));
            else break;
        }
    }
    return Array.from(res).sort((a, b) => {
        return a - b
    });
};