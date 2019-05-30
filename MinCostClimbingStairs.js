/**
 * 746. Min Cost Climbing Stairs
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    for (i = 2; i < cost.length; i++) cost[i] += cost[i - 1] > cost[i - 2] ? cost[i - 2] : cost[i - 1];
    return cost[cost.length - 1] > cost[cost.length - 2] ? cost[cost.length - 2] : cost[cost.length - 1];
};