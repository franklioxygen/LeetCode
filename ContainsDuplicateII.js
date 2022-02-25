/**
 * 219. Contains Duplicate II
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j])
        if (j - i <= k) return true;
    }
  }
  return false;
};