/**
 * 912. Sort an Array
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  let res = [];
  while (nums.length != 0) {
    let min = Infinity;
    let index = 0;
    for (i = 0; i < nums.length; i++) {
      if (min > nums[i]) {
        min = nums[i];
        index = i;
      }
    }
    nums.splice(index, 1);
    res.push(min);
  }
  return res;
};