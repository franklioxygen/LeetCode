/**
 * 646. Maximum Length of Pair Chain
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
    pairs.sort((a, b) => {
        return a[1] - b[1]
    });
    let res = 1;
    let cur = pairs[0];
    for (pr of pairs)
        if (pr[0] > cur[1]) {
            cur = pr;
            res++;
        }
    return res;
};