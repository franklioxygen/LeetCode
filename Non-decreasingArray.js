/**
 * 665. Non-decreasing Array
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    let chance = 1;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            if (chance == 0) return false;
            if (i == 1 || nums[i] >= nums[i - 2]) nums[i - 1] = nums[i];
            else nums[i] = nums[i - 1];
            chance = 0;
        }
    }
    return true;
};