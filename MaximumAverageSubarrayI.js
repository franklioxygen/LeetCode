/**
 * 643. Maximum Average Subarray I
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sub = [];
  let max = -Infinity;
  for (i = 0; i <= nums.length - k; i++) {
    for (j = i; j < i + k; j++) {
      sub.push(nums[j]);
    }
    max = Math.max(sub.reduce((a, b) => a + b, 0), max);
    sub = [];
  }
  return max / k;
};