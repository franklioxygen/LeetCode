/**
 * 693. Binary Number with Alternating Bits
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  s = n.toString(2);
  for (i = 0; i < s.length - 1; i++)
    if (s[i] == s[i + 1]) return false;
  return true;
};