/**
 * 441. Arranging Coins
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let sum = 0;
    for (i = 1; sum <= n; i++) sum += i;
    return sum == n ? i - 1 : i - 2;
};