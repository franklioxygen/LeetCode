/**
 * 704. Binary Search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let res;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    res = Math.ceil((end + start) / 2);
    if (nums[res] == target) return res;
    if (nums[res] < target) start = res + 1;
    else end = res - 1;
  }
  return -1;
};