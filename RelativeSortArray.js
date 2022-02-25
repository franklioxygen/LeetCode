/**
 * 1122. Relative Sort Array
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let res = [];
  let m = new Map();
  for (i of arr1)
    if (!m.has(i)) m.set(i, 1);
    else m.set(i, m.get(i) + 1);
  for (i of arr2) {
    res = res.concat(Array(m.get(i)).fill(i));
    m.delete(i);
  }
  m = Array.from(m).sort((a, b) => {
    return a[0] - b[0];
  });
  for (i of m) res = res.concat(Array(i[1]).fill(i[0]));
  return res;
};