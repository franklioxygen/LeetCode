/**
 * 781. Rabbits in Forest
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
    let colMap = new Map();
    let res = 0;
    for (rab of answers) {
        if (!colMap.has(rab)) colMap.set(rab, 1);
        else colMap.set(rab, colMap.get(rab) + 1);
    }
    for (nums of colMap) {
        if (nums[0] == 0) res += nums[1];
        else res += Math.ceil(nums[1] / (nums[0] + 1)) * (nums[0] + 1)
    }
    return res;
};