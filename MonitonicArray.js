/**
 * 896. Monotonic Array
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  let B = A.slice(0);
  return arraysEqual(B, A.sort(sortNum)) || arraysEqual(B, A.reverse());
};

function arraysEqual(a, b) {
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function sortNum(a, b) {
  return a - b;
}