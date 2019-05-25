/**
 * 448. Find All Numbers Disappeared in an Array
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let res = [];
    let numSet = new Set()
    for (i = 0; i < nums.length; i++) numSet.add(nums[i]);
    for (j = 1; j <= nums.length; j++)
        if (!numSet.has(j)) res.push(j);
    return res;
};