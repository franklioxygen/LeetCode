/**
 * 1046. Last Stone Weight
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let sorted = stones.sort(sortNumber).reverse();
  for (i = 0; sorted.length != 1; i++) {
    sorted[1] = sorted[0] - sorted[1];
    sorted.shift();
    sorted.sort(sortNumber).reverse();
  }
  return sorted;
};

function sortNumber(a, b) {
  return a - b;
}