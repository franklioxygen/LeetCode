/**
 * 503. Next Greater Element II
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let res = []
    let max = Math.max(...nums);
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == max) res[i] = -1;
        else {
            let pointer = i + 1;
            while (1) {
                if (pointer == nums.length) pointer = 0;
                if (nums[i] < nums[pointer]) {
                    res[i] = nums[pointer];
                    break;
                }
                pointer++;
            }
        }
    }
    return res;
};