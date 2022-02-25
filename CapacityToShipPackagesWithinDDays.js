/**
 * 1011. Capacity To Ship Packages Within D Days
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
  let res = 0;
  let min = Math.max(...weights);
  let max = weights.reduce(function (acc, cur) {
    return acc + cur;
  });
  let validate = maxLoad => {
    let load = 0;
    let days = 0;
    for (pack of weights) {
      if (load + pack > maxLoad) {
        load = pack;
        days++;
      } else load += pack;
      if (days > D) return false;
    }
    return days + 1 <= D;
  };
  while (min < max) {
    mid = Math.floor((max + min) / 2);
    if (validate(mid)) max = mid;
    else min = mid + 1;
  }
  return min;
};