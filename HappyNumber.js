/**
 * 202. Happy Number
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let newN = 0;
  let sum = 0;

  while (n != 1) {
    n = n.toString();
    for (i = 0; i < n.length; i++) {
      newN = Math.pow(parseInt(n[i], 10), 2);
      sum += newN;
    }
    n = sum;
    sum = 0;
    if (n == 4) return false;
  }
  return true;
};