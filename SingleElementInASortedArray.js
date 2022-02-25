/**
 * 540. Single Element in a Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  while (nums.length >= 3) {
    let center = Math.floor(nums.length / 2);
    if (nums[center - 1] != nums[center] && nums[center] !== nums[center + 1]) return nums[center];
    if (center % 2 === 0) {
      if (nums[center] === nums[center - 1]) nums = nums.splice(0, center + 1);
      else nums = nums.splice(center, nums.length - 1);
    }
    if (center % 2 !== 0) {
      if (nums[center] === nums[center - 1]) nums = nums.splice(center + 1, nums.length - 1);
      else nums = nums.splice(0, center);
    }
  }
  return nums[0];
};