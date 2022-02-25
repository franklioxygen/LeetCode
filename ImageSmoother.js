/**
 * 661. Image Smoother
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  let res = Array(M.length).fill().map(() => Array(M[0].length).fill(0));
  let point = (x, y) => {
    let nums = [];
    let sum = 0;
    let cnt = 0;
    let dirs = [
      [x, y],
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y + 1],
      [x - 1, y - 1],
      [x + 1, y - 1],
      [x - 1, y + 1]
    ];
    for ([a, b] of dirs) {
      if (a > -1 && b > -1 && a < M.length && b < M[0].length) {
        sum += M[a][b];
        cnt++;
      }
    }
    return Math.floor(sum / cnt);
  };
  for (i = 0; i < M.length; i++) {
    for (j = 0; j < M[0].length; j++) {
      res[i][j] = point(i, j);
    }
  }
  return res;
};