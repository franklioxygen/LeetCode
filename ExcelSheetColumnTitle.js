/**
 * 168. Excel Sheet Column Title
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let table = 'ZABCDEFGHIJKLMNOPQRSTUVWXY';
  let mod;
  let res = '';
  while (n > 0) {
    mod = n % 26;
    res = table[mod] + res;
    n = Math.floor((n - 1) / 26);
  }
  return res;
};