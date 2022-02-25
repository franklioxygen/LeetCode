/**
 * 258. Add Digits
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let sum = num.toString().split('').reduce((sum, x) => Number(sum) + Number(x));
  if(sum>9) return addDigits(sum);
  return sum;
};