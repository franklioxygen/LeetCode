/**
 * 66. Plus One
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let res = [];
  digits[digits.length - 1] += 1;
  let add1 = 0;
  for (i = digits.length; i >= 0; i--) {
    if (digits[i] > 9) {
      digits[i] = 0;
      if (i - 1 < 0) {
        digits.reverse().push(0);
        digits[i] += 1;
        break;
      }
      digits[i - 1] += 1;
    }
  }
  return digits;
};