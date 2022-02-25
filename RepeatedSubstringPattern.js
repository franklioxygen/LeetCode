/**
 * 459. Repeated Substring Pattern
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (i = 1; i < (s.length + 1) / 2; i++)
    if (s == s.slice(i, s.length) + s.slice(0, i)) return true;
  return false;
};