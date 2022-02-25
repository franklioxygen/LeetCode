/**
 * 796. Rotate String
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A == B) return true;
  for (i = 1; i < A.length; i++) {
    if (A.slice(i, A.length) + A.slice(0, i) == B) return true;
  }
  return false;
};