/**
 * 121. Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let res = 0;
    let min = prices[0];
    for (i = 0; i < prices.length; i++) {
        res = prices[i] - min > res ? prices[i] - min : res;
        min = min < prices[i] ? min : prices[i];
    }
    return res;
};