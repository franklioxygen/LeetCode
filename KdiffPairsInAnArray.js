/**
 * 532. K-diff Pairs in an Array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let resSet = new Set();
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) == k) {
        resSet.add([nums[i], nums[j]].sort((a, b) => {
          return a - b;
        }).join(''));
      }
    }
  }
  return resSet.size;
};