/**
 * 976. Largest Perimeter Triangle
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
  A.sort(sortNumber).reverse();
  for (i = 0; i < A.length; i++)
    if (A[i] < A[i + 1] + A[i + 2]) return A[i] + A[i + 1] + A[i + 2];
  return 0;
};

function sortNumber(a, b) {
  return a - b;
}