/**
 * 136. Single Number
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let setSingle = new Set();
    for (i in nums) {
        if (setSingle.has(nums[i])) setSingle.delete(nums[i]);
        else setSingle.add(nums[i]);
    }
    return Array.from(setSingle)[0];
};