/**
 * 724. Find Pivot Index
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums.slice(0, i).reduce((sum, a) => sum += a, 0) ==
            nums.slice(i + 1, nums.length).reduce((sum, a) => sum += a, 0)) return i;
  }
  return -1;
};