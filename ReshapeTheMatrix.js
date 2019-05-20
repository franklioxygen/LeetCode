/**
 * 566. Reshape the Matrix
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    if (r * c != nums.length * nums[0].length) return nums;
    let res = [];
    let oneD = [];
    let line = [];
    for (i = 0; i < nums.length; i++) oneD = oneD.concat(nums[i]);
    for (i = 0; i < r; i++) {
        for (j = 0; j < c; j++) {
            line.push(oneD[0]);
            oneD.shift();
        }
        res.push(line);
        line = [];
    }
    return res;

};