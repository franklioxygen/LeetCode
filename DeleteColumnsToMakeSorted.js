/**
 * 944. Delete Columns to Make Sorted
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
  let res = 0;
  for (i = 0; i < A[0].length; i++) {
    for (j = 0; j < A.length - 1; j++) {
      if (A[j][i].charCodeAt(0) > A[j + 1][i].charCodeAt(0)) {
        res++;
        break;
      }
    }
  }
  return res;
};