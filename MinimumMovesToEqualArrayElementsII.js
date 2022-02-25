/**
 * 462. Minimum Moves to Equal Array Elements II
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  let res = 0;
  nums.sort((a, b) => {
    return a - b;
  });
  let target = nums[Math.floor(nums.length / 2)];
  for (num of nums) {
    res += (Math.abs(num - target));
  }
  return res;
};