/**
 * 747. Largest Number At Least Twice of Others
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    if (nums.length == 1) return 0;
    let pos = nums.indexOf(Math.max(...nums));
    let maxVal = nums[pos];
    nums.splice(pos, 1);
    if (maxVal / Math.max(...nums) >= 2) return pos;
    return -1;
};