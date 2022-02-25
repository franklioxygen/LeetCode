/**
 * 922. Sort Array By Parity II
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let oddPos = [];
  let evenPos = [];
  let res = [];
  for (i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0) oddPos.push(A[i]);
    else evenPos.push(A[i]);
  }
  for (j = 0; j < A.length / 2; j++) {
    res.push(oddPos[j]);
    res.push(evenPos[j]);
  }
  return res;
};