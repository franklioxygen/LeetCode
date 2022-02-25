/**
 * 349. Intersection of Two Arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let res = new Set();
  for (i = 0; i < nums1.length; i++) {
    if (!res.has(nums1[i])) {
      for (j = 0; j < nums2.length; j++) {
        if (nums1[i] == nums2[j]) {
          res.add(nums1[i]);
          break;
        }
      }
    }
  }
  return Array.from(res);
};