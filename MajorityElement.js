/**
 * 169. Majority Element
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums = nums.sort(sortNum);
  return nums[Math.floor(nums.length / 2)];
};
let sortNum = (a, b) => {
  return a - b;
};