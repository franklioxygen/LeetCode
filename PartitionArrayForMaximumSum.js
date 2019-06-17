/**
 * 1043. Partition Array for Maximum Sum
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var maxSumAfterPartitioning = function (A, K) {
    let dp = [];
    dp[0] = 0;
    for (i = 1; i <= A.length; i++) {
        let max = -Infinity;
        for (j = 1; j <= K && i - j >= 0; j++) {
            max = Math.max(max, A[i - j]);
            dp[i] = dp[i] || 0;
            dp[i] = (Math.max(dp[i], dp[i - j] + max * j));
        }
    }
    return dp[dp.length - 1];
};