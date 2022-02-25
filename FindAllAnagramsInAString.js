/**
 * 438. Find All Anagrams in a String
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let pLength = p.length;
  let temp = '';
  p = Array.from(mapIt(p));
  let res = [];
  for (i = 0; i < (s.length - pLength + 1); i++) {
    temp = mapIt(s.slice(i, i + pLength));
    for (j = 0; j < p.length; j++) {
      if (temp.get(p[j][0]) != p[j][1]) break;
      if (j == p.length - 1) res.push(i);
    }
  }
  return res;
};

function mapIt(str) {
  let i;
  let m = new Map();
  for (i = 0; i < str.length; i++) {
    if (!m.has(str[i])) m.set(str[i], 1);
    else m.set(str[i], m.get(str[i]) + 1);
  }
  return m;
}