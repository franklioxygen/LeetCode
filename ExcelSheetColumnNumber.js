/**
 * 171. Excel Sheet Column Number
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let res = 0;
  for (j = 0, i = s.length - 1; i >= 0; i--, j++) res = res + letter2Number(s[i]) * Math.pow(26, j);
  return res;
};
let letter2Number = char => {
  return char.charCodeAt(0) - 64;
};