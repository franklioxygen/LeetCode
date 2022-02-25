/**
 * 198. House Robber
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let sums = [];
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  sums.push(nums[0]);
  sums.push(nums[0] > nums[1] ? nums[0] : nums[1]);
  for (i = 2; i < nums.length; i++) {
    sums.push(nums[i] + sums[i - 2] > sums[i - 1] ? nums[i] + sums[i - 2] : sums[i - 1]);
  }
  return sums[sums.length - 1];

};