/**
 * 217. Contains Duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let numSet = new Set();
  for (i = 0; i < nums.length; i++) {
    if (!numSet.has(nums[i])) numSet.add(nums[i]);
    else return true;
  }
  return false;
};