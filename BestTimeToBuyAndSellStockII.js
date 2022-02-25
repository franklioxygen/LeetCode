/**
 * 122. Best Time to Buy and Sell Stock II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  for (i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) res = prices[i + 1] - prices[i] + res;
  }
  return res;
};