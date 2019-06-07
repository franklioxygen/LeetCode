/**
 * 303. Range Sum Query - Immutable
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums;
    this.sums = [nums[0]];
    for (i = 1; i < nums.length; i++) this.sums[i] = (nums[i] + this.sums[i - 1]);
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    if (i == 0) return this.sums[j]
    else return this.sums[j] - this.sums[i - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */