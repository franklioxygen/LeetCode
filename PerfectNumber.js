/**
 * 507. Perfect Number
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num <= 1) return false;
  let div = [];
  for (i = num - 1; i > 0; i--)
    if (num % i == 0) div.push(i);
  return num == div.reduce(function (a, c) {
    return a + c;
  });
};