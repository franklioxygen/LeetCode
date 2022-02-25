/**
 * 949. Largest Time for Given Digits
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function (A) {
  let dig1 = '',
    dig2 = '',
    dig3 = '',
    dig4 = '';
  let mA = new Map();
  for (j = 2; j >= 0; j--) {
    mA.clear();
    dig1 = '', dig2 = '', dig3 = '', dig4 = '';
    for (i = 0; i < A.length; i++) {
      if (!mA.has(A[i])) mA.set(A[i], 1);
      else mA.set(A[i], mA.get(A[i]) + 1);
    }
    if (mA.has(j)) {
      dig1 = j.toString();
      mA.set(j, mA.get(j) - 1);
      if (mA.get(j) == 0) mA.delete(j);
    }
    if (dig1 == '') continue;
    if (dig1 == '2') {
      for (i = 3; i >= 0; i--) {
        if (mA.has(i)) {
          dig2 = i.toString();
          mA.set(i, mA.get(i) - 1);
          if (mA.get(i) == 0) mA.delete(i);
          break;
        }
      }
      if (dig2 == '') return '';
    } else {
      for (i = 9; i >= 0; i--) {
        if (mA.has(i)) {
          dig2 = i.toString();
          mA.set(i, mA.get(i) - 1);
          if (mA.get(i) == 0) mA.delete(i);
          break;
        }
      }
    }
    for (i = 5; i >= 0; i--) {
      if (mA.has(i)) {
        dig3 = i.toString();
        mA.set(i, mA.get(i) - 1);
        if (mA.get(i) == 0) mA.delete(i);
        break;
      }
    }
    if (dig3 == '') continue;
    dig4 = Array.from(mA)[0][0].toString();
    return dig1 + dig2 + ':' + dig3 + dig4;
  }
  return '';
};