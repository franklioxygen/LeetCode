/**
 * 345. Reverse Vowels of a String
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let res = s.split('');
  let vow = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let temp = '';
  for (i = 0, j = s.length - 1; i < j; i++, j--) {
    while (!vow.has(s[i]) && i < s.length) i++;
    while (!vow.has(s[j]) && j > 0) j--;
    if (i < j) {
      temp = res[i];
      res[i] = res[j];
      res[j] = temp;
    }
  }
  return res.join('');
};