/**
 * 409. Longest Palindrome
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let res = 0;
  let m = new Map();
  let hasOdd = 0;
  for (i = 0; i < s.length; i++) {
    if (!m.has(s[i])) m.set(s[i], 1);
    else m.set(s[i], m.get(s[i]) + 1);
  }
  for (let letter of m) {
    if (letter[1] % 2 == 0) res = res + letter[1];
    else {
      res = res + letter[1] - 1;
      hasOdd = 1;
    }
  }
  return res + hasOdd;
};