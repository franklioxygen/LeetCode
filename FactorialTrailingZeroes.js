/**
 * 172. Factorial Trailing Zeroes
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let fivePow = 5;
    let total = 0
    while (fivePow <= n) {
        total += Math.floor(n / fivePow);
        fivePow *= 5;
    }
    return total;
};