/**
 * 645. Set Mismatch
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    nums.sort((a, b) => {
        return a - b
    });
    let mis = 0;
    let dup = 0;
    for (i = 0; i < nums.length; i++)
        if (nums[i] == nums[i + 1]) {
            dup = nums[i];
            nums.splice(i, 1);
            break;
        }
    for (i = 0; i < nums.length; i++)
        if (nums[i] != i + 1) {
            mis = i + 1;
            break;
        }
    if (mis == 0) mis = nums.length + 1;
    return [dup, mis];
};