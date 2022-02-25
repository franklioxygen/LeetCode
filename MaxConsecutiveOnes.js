/**
 * 485. Max Consecutive Ones
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let i;
  let res = 0;
  let curr = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      curr++;
      res = res > curr ? res : curr;
    } else curr = 0;
  }
  return res;
};