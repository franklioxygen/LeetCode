/**
 * 496. Next Greater Element I
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let res = [];
  for (i = 0; i < nums1.length; i++) {
    for (j = 0; j < nums2.length; j++) {
      if (nums2[j] == nums1[i]) {
        for (k = j; k < nums2.length; k++) {
          if (nums2[k + 1] > nums1[i]) {
            res.push(nums2[k + 1]);
            break;
          }
          if (k == nums2.length - 1) res.push(-1);
        }
      }
    }
  }
  return res;
};