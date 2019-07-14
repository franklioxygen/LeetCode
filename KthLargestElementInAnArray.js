/**
 * 215. Kth Largest Element in an Array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let sorted = [-Infinity];
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j <= sorted.length; j++) {
            if (nums[i] >= sorted[j]) {
                sorted.splice(j, 0, nums[i]);
                break;
            }
        }
    }
    return sorted[k - 1];
};