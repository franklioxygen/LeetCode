/**
 * 674. Longest Continuous Increasing Subsequence
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let max = 1;
    let curr = 1;
    if (nums.length == 0) return 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i + 1] > nums[i]) {
            curr++;
            max = max > curr ? max : curr;
        } else curr = 1;
    }
    return max;
};