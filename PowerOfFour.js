/**
 * 342. Power of Four
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  while (num != 1) {
    num /= 4;
    if (num < 1) return false;
  }
  return true;
};