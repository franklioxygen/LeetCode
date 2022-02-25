/**
 * 414. Third Maximum Number
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let third = 3;
  for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] != nums[i - 1]) third--;
    if (third == 0) return nums[i];
  }
  return nums[nums.length - 1];
};