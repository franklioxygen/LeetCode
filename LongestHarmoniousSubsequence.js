/**
 * 594. Longest Harmonious Subsequence
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let allNum = new Map();
  let res = 0;
  for (i = 0; i < nums.length; i++) {
    if (!allNum.has(nums[i])) allNum.set(nums[i], 1);
    else allNum.set(nums[i], allNum.get(nums[i]) + 1);
  }
  let arr = Array.from(allNum).sort((a, b) => {
    return a[0] - b[0];
  });
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1][0] - arr[i][0] == 1)
      res = res > (arr[i][1] + arr[i + 1][1]) ? res : (arr[i][1] + arr[i + 1][1]);
  }
  return res;

};