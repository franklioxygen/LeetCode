/**
 * 1013. Partition Array Into Three Parts With Equal Sum
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
  let sum = A.reduce((a, b) => {
    return a + b;
  });
  if (sum % 3 != 0) return false;
  let cnt = 0;
  let acc = 0;
  for (i = 0; i < A.length; i++) {
    acc += A[i];
    if (acc == sum / 3) {
      cnt += 1;
      acc = 0;
      if (cnt == 3) return true;
      continue;
    }
  }
  return false;
};