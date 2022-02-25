/**
 * 231. Power of Two
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  while (n >= 1) {
    if (n == 1) return true;
    n = n / 2;
  }
  return false;
};