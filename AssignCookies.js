/**
 * 455. Assign Cookies
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let res = 0;
  g.sort(sortNum);
  s.sort(sortNum);
  let child = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] >= g[child]) {
      res++;
      child++;
    }
  }
  return res;
};
let sortNum = (a, b) => {
  return a - b;
};