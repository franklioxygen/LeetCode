/**
 * 260. Single Number III
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let numSet = new Set();
    for (num of nums)
        if (!numSet.has(num)) numSet.add(num);
        else numSet.delete(num);
    return Array.from(numSet);
};