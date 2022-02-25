/**
 * 557. Reverse Words in a String III
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let words = s.split(' ');
  let res = '';
  for (i in words) {
    res = res + words[i].split('').reverse().join('') + ' ';
  }
  return res.slice(0, res.length - 1);
};