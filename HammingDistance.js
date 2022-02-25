/**
 * 461. Hamming Distance
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let zeros = '';
  let count = 0;
  x = x.toString(2);
  y = y.toString(2);
  for (i = 0; i < Math.abs(x.length - y.length); i++) zeros += '0';
  x.length >= y.length ? y = zeros + y : x = zeros + x;
  for (j = 0; j < x.length; j++)
    if (x[j] != y[j]) count++;
  return count;
};