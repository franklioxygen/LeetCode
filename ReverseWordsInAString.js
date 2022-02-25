/**
 * 151. Reverse Words in a String
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.replace(/\s+/g, ' ').trim().split(' ').reverse().join(' ');
  return s;
};