/**
 * 832. Flipping an Image
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  var B = A.map(function (arr) {
    return arr.slice();
  });
  for (i = 0; i < A[0].length; i++) {
    for (j = 0; j < A.length; j++) {

      B[i][j] = ((A[i][A.length - j - 1] + 1) % 2);

    }
  }
  return B;
};