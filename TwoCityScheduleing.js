/**
 * 1029. Two City Scheduling
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    return costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]))
        .reduce((sum, c, i) => sum + (i < costs.length / 2 ? c[0] : c[1]), 0)
}