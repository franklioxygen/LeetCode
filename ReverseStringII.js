/**
 * 541. Reverse String II
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let res = [];
  let odd = 0;
  for (i = 0; i < s.length; i += k) {
    odd = odd == 1 ? 0 : 1;
    res.push(s.slice(i, i + k));
    if (odd == 1) res[i / k] = res[i / k].split('').reverse().join('');
  }
  return res.join('');
};