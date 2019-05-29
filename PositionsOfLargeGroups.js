/**
 * 830. Positions of Large Groups
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
    let res = [];
    let start = 0;
    let end = 0;
    let len = 0;
    for (i = 0; i < S.length + 1; i++) {
        if (S[i] == S[i - 1]) len++;
        if (S[i] != S[i - 1]) {
            end = i - 1;
            if (len >= 3) res.push([start, end]);
            start = i;
            len = 1;
        }
    }
    return res;
};