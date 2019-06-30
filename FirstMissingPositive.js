/**
 * 41. First Missing Positive
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let numSet = new Set();
    for (num of nums)
        if (!numSet.has(num) && num > 0) numSet.add(num);
    nums = Array.from(numSet).sort((a, b) => {
        return a - b;
    });
    if (nums.length == 0) return 1;
    for (i = 0; i < nums.length; i++)
        if (nums[i] != i + 1) return i + 1;
    return nums[nums.length - 1] + 1;
};