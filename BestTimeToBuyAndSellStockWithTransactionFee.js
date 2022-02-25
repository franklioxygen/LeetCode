/**
 * 714. Best Time to Buy and Sell Stock with Transaction Fee
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let buy = -prices[0];
  let sell = 0;
  for (price of prices) {
    buy = Math.max(buy, sell - price);
    sell = Math.max(sell, buy + price - fee);
  }
  return sell;
};