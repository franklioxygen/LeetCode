/**
 * 575. Distribute Candies
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  let kinds = new Set();
  for (i in candies) kinds.add(candies[i]);
  return Math.min(candies.length / 2, kinds.size);
};