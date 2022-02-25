/**
 * 347. Top K Frequent Elements
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let numMap = new Map();
  let res = [];
  for (num of nums)
    if (!numMap.has(num)) numMap.set(num, 1);
    else numMap.set(num, numMap.get(num) + 1);
  numMap = Array.from(numMap).sort((a, b) => {
    return a[1] - b[1];
  }).reverse();
  for (i = 0; i < k; i++) {
    res.push(numMap[i][0]);
  }
  return res;
};