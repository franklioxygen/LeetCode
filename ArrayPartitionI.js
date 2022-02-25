/**
 * 561. Array Partition I
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sorted;
  let swap;
  let res = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        swap = nums[i];
        nums[i] = nums[j];
        nums[j] = swap;
      }
    }
  }
  for (k = 0; k < nums.length / 2; k++) {
    res += nums[2 * k];
  }
  return res;
};