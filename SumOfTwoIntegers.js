/**
 * 371. Sum of Two Integers
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  var c;
  while ((c = a & b) != 0) {
    a = a ^ b;
    b = c << 1;
  }
  return a ^ b;
};