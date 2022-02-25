/**
 * 728. Self Dividing Numbers
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let res = [];
  let curr;
  let digits = [];
  for (i = 0; i <= right - left; i++) {
    curr = left + i;
    for (j = 1; j < right.toString().length; j++) {
      while ((Math.floor(curr / 10)) || (curr % 10)) {
        digits.push(curr % 10);
        curr = Math.floor(curr / 10);
      }
    }
    while (digits.length != 0) {
      if (((left + i) % digits.pop()) != 0) {
        digits = [];
        break;
      }
      if (digits.length == 0) res.push(left + i);
    }
  }
  return res;
};