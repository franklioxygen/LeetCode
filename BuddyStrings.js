/**
 * 859. Buddy Strings
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if (A.length != B.length || A.length == 0) return false;
  let dup = new Set();
  if (A == B) {
    for (i = 0; i < A.length; i++)
      if (!dup.has(A[i])) dup.add(A[i]);
    if (dup.size != A.length) return true;
    else return false;
  }
  let pos = [];
  for (i = 0; i < A.length; i++)
    if (A[i] != B[i]) pos.push([A[i], i]);
  if (pos.length != 2) return false;
  A = A.split('');
  A[pos[1][1]] = pos[0][0];
  A[pos[0][1]] = pos[1][0];
  A = A.join('');
  return A == B;
};