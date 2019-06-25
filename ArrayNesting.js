/**
 * 565. Array Nesting
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
    let visited = Array(nums.length).fill(false);
    let currLen = 0;
    let maxLen = 0;
    let next = index => {
        if (visited[index] == false) {
            currLen++;
            visited[index] = true;
            next(nums[index]);
        } else return;
    };
    for (i = 0; i < nums.length; i++) {
        next(i);
        maxLen = maxLen > currLen ? maxLen : currLen;
        currLen = 0;
    }
    return maxLen;
};