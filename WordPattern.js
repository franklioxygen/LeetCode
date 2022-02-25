/**
 * 290. Word Pattern
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  let sPatt = new Set();
  let target = '';
  pattern = pattern.split('');
  str = str.split(' ');
  let changed = Array(str.length).fill(0);
  for (i = 0; i < pattern.length; i++) {
    if (!sPatt.has(pattern[i])) {
      sPatt.add(pattern[i]);
      target = str[i];
      for (j = 0; j < str.length; j++)
        if (str[j] == target && changed[j] != 1) {
          str[j] = pattern[i];
          changed[j] = 1;
        }
    }
  }
  return pattern.join('') == str.join('');
};