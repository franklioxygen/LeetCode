/**
 * 326. Power of Three
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (n >= 1) {
    if (n == 1) return true;
    n = n / 3;
  }
  return false;
};