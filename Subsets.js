/**
 * 78. Subsets
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];
  let dfs = (n, start, cur) => {
    if (cur.length == n) {
      let dummy = JSON.parse(JSON.stringify(cur));
      res.push(dummy);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      cur.push(nums[i]);
      dfs(n, i + 1, cur);
      cur.pop();
    }
  };
  for (i = 0; i <= nums.length; i++) dfs(i, 0, []);
  return res;
};