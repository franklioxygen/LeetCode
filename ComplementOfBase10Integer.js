/**
 * 1009. Complement of Base 10 Integer
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  let s = N.toString(2);
  for (i = 0; i < s.length; i++)
    s[i] == 0 ? s = s.substr(0, i) + '1' + s.substr(i + 1) : s = s.substr(0, i) + '0' + s.substr(i + 1);
  return parseInt(s, 2);
};