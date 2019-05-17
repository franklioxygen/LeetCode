/**
 * 821. Shortest Distance to a Character
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let minLeft, minRight;
  let res = [];
  for (i = 0; i < S.length; i++) {
    if (S[i] == C) {
      res.push(0);
      continue;
    }
    minLeft = dist(i, -1, S, C);
    minRight = dist(i, 1, S, C);
    res.push(minLeft < minRight ? minLeft : minRight);
  }
  return res;
};

function dist(i, dir, S, C) {
  let j;
  let res = 0;

  if (dir < 0) {
    for (j = 0; j <= i; j++) {
      if (S[i + dir * j] == C) {
        return res;
        if (i + dir * j == 0) {
          return S.length;
        }
      } else {
        res++;
      }
    }
  }
  if (dir > 0) {
    for (j = 0; j <= S.length; j++) {
      if (i + dir * j == S.length) {
        return S.length;
      }
      if (S[i + dir * j] == C) {
        return res;
      } else {
        res++;
      }
    }
  }
}
