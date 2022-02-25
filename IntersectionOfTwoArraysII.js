/**
 * 350. Intersection of Two Arrays II
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let res = [];
  let numsA = nums1.length > nums2.length ? nums1 : nums2;
  let numsB = nums1.length > nums2.length ? nums2 : nums1;
  for (i = 0; i < numsB.length; i++) {
    for (j = 0; j < numsA.length; j++) {
      if (numsB[i] == numsA[j]) {
        res.push(numsB[i]);
        numsA.splice(j, 1);
        break;
      }
    }
  }
  return res;
};