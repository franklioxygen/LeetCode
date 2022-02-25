/**
 * 941. Valid Mountain Array
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  if (A.length <= 2) return false;
  let max = Math.max(...A);
  let pos = A.indexOf(max);
  if (pos == 0 || pos == A.length - 1) return false;
  for (i = pos; i >= 1; i--)
    if (A[i] <= A[i - 1]) return false;
  for (i = pos; i <= A.length - 2; i++)
    if (A[i] <= A[i + 1]) return false;
  return true;
};