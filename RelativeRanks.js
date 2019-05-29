/**
 * 506. Relative Ranks
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
    let scores = [];

    for (i = 0; i < nums.length; i++) scores.push([i, nums[i]]);
    scores.sort(sortScore).reverse();
    for (i = 0; i < nums.length; i++) {
        if (i == 0) scores[i][1] = "Gold Medal";
        if (i == 1) scores[i][1] = "Silver Medal";
        if (i == 2) scores[i][1] = "Bronze Medal";
        if (i > 2) scores[i][1] = i + 1;
    }
    scores.sort(sortPos);
    for (i = 0; i < nums.length; i++) scores[i] = scores[i][1].toString();
    return scores;
};
let sortScore = (a, b) => {
    return a[1] - b[1]
};
let sortPos = (a, b) => {
    return a[0] - b[0]
};