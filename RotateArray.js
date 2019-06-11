/**
 * 189. Rotate Array
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (k == 0) return nums;
    nums.reverse();
    let num;
    for (; k > 0; k--) {
        num = nums[0];
        nums.push(num);
        nums.shift();
    }
    return nums.reverse();
};