/**
 * 453. Minimum Moves to Equal Array Elements
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let res = 0;
    let min = Math.min(...nums);
    for (i = 0; i < nums.length; i++) res = res + nums[i] - min;
    return res;
};