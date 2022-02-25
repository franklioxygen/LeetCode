/**
 * 917. Reverse Only Letters
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  let i = 0,
    j = S.length - 1;

  while (i < j) {
    while ((!isLetter(S[i])) && i < j) i++;
    while ((!isLetter(S[j])) && i < j) j--;
    if (i != j) S = S.slice(0, i) + S[j] + S.slice(i + 1, j) + S[i] + S.slice(j + 1, S.length);
    i++;
    j--;
  }
  return S;
};

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}