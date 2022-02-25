/**
 * 784. Letter Case Permutation
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  if (!isNaN(S)) return [S];
  S = S.split('');
  let res = [];
  let ltNum = 0;
  let pos = [];
  for (i = 0; i < S.length; i++) {
    ltNum += isNaN(S[i]) ? 1 : 0;
    if (isNaN(S[i])) pos.push(i);
  }
  let maxBin = parseInt(Array(ltNum).fill(1).join(''), 2);
  let pattern = [];
  for (i = maxBin; i >= 0; i--) pattern.push(Array(ltNum - i.toString(2).length).fill(0).join('') + i.toString(2));
  let swic = (s, ul) => {
    if (ul == '0') return s.toUpperCase();
    else return s.toLowerCase();
  };
  for (one of pattern) {
    for (j = 0; j < pos.length; j++) {
      S[pos[j]] = swic(S[pos[j]], one[j]);
    }
    res.push(S.join(''));
  }
  return res;
};