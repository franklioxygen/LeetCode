/**
 * 888. Fair Candy Swap
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  let gap = (sum(A) - sum(B)) / 2;
  for (i = 0; i < A.length; i++) {
    for (j = 0; j < B.length; j++) {
      if (A[i] - B[j] == gap) return [A[i], B[j]];
    }
  }
};

function sum(arr) {
  let i;
  let res = 0;
  for (i = 0; i < arr.length; i++) {
    res = res + arr[i];
  }
  return res;
}