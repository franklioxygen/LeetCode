/**
 * 283. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let length = nums.length;

  for (i = 0; i < nums.length && length != 0; length--) {
    if (nums[i] == 0) {
      nums.splice(i, 1);
      nums.push(0);
    } else i++;
  }

};