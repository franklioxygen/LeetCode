/**
 * 442. Find All Duplicates in an Array
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let dup = new Set();
  let res = [];
  for (num of nums) {
    if (!dup.has(num)) dup.add(num);
    else res.push(num);
  }
  return res;
};