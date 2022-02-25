/**
 * 861. Score After Flipping Matrix
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
  let res = 0;
  let colZero = 0;
  for (i = 0; i < A.length; i++)
    if (A[i][0] == 0) toggleRow(A[i]);
  for (i = 0; i < A[0].length; i++) {
    for (j = 0; j < A.length; j++) {
      if (A[j][i] == 0) colZero++;
    }
    if (colZero > (A.length) / 2) toggleCol(A, i);
    colZero = 0;
  }
  for (i = 0; i < A.length; i++) res += parseInt(A[i].join(''), 2);
  return res;
};

function toggleRow(arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] == 0) arr[i] = 1;
    else arr[i] = 0;
  return arr;
}

function toggleCol(A, col) {
  for (let i = 0; i < A.length; i++) {
    if (A[i][col] == 0) A[i][col] = 1;
    else A[i][col] = 0;
  }
  return A;
}