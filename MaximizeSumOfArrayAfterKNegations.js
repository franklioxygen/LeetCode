/**
 * 1005. Maximize Sum Of Array After K Negations
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
  A = A.sort(sortNum);
  for (i = 0; i < K; i++) {
    A[0] = -A[0];
    A = A.sort(sortNum);
  }
  return A.reduce(function (acc, curr) {
    return acc + curr;
  });
};

function sortNum(a, b) {
  return a - b;
}