/**
 * 1020. Number of Enclaves
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function (A) {
  let res = 0;

  for (i = 0; i < A[0].length; i++) {
    if (A[0][i] == 1) A[0][i] = 2;
    if (A[A.length - 1][i] == 1) A[A.length - 1][i] = 2;
  }
  for (j = 0; j < A.length; j++) {
    if (A[j][0] == 1) A[j][0] = 2;
    if (A[j][A[0].length - 1] == 1) A[j][A[0].length - 1] = 2;
  }
  let mark = (i, j) => {
    A[i][j] = 2;
    if (i - 1 >= 0)
      if (A[i - 1][j] == 1) mark(i - 1, j);
    if (i + 1 < A.length)
      if (A[i + 1][j] == 1) mark(i + 1, j);
    if (j - 1 >= 0)
      if (A[i][j - 1] == 1) mark(i, j - 1);
    if (j + 1 < A[0].length)
      if (A[i][j + 1] == 1) mark(i, j + 1);
  };
  for (i = 0; i < A.length; i++)
    for (j = 0; j < A[0].length; j++)
      if (A[i][j] == 2) {
        mark(i, j);
      }
  for (i = 0; i < A[0].length; i++)
    for (j = 0; j < A.length; j++)
      if (A[j][i] == 1) res += 1;
  return res;
};