/**
 * 739. Daily Temperatures
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let res = [];
  T.push(0);
  for (i = 0; i < T.length; i++) {
    for (j = i + 1; j < T.length; j++) {
      if (T[j] > T[i]) {
        res.push(j - i);
        break;
      }
      if (j == T.length - 1) res.push(0);
    }
  }
  return res;
};