/**
 * 88. Merge Sorted Array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n);
  let merged = nums1.concat(nums2).sort(function (a, b) {
    return a - b;
  });
  console.log(merged);
  for (i = 0; i < merged.length; i++) nums1[i] = merged[i];
  return nums1;
};