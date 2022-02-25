/**
 * 53. Maximum Subarray
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let curVal = 0;
  let maxVal = nums[0];
  for (i = 0; i < nums.length; i++) {
    curVal = curVal > 0 ? curVal + nums[i] : nums[i];
    maxVal = maxVal > curVal ? maxVal : curVal;
  }
  return maxVal;
};