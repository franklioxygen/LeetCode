/**
 * 451. Sort Characters By Frequency
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let charMap = new Map();
  let res = '';
  for (char of s)
    if (!charMap.has(char)) charMap.set(char, 1);
    else charMap.set(char, charMap.get(char) + 1);
  charMap = Array.from(charMap).sort((a, b) => {
    return a[1] - b[1];
  }).reverse();
  for (char of charMap) res += Array(char[1]).fill(char[0]).join('');
  return res;
};