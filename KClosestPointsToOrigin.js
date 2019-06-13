/**
 * 973. K Closest Points to Origin
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    let dist = [];
    let res = [];
    for (i = 0; i < points.length; i++) dist.push([i, distance(points[i])]);
    dist.sort((a, b) => {
        return a[1] - b[1]
    });
    for (i = 0; i < K; i++) res.push(points[dist[i][0]]);
    return res;
};
let distance = coord => {
    return Math.sqrt(Math.pow(coord[0], 2) + Math.pow(coord[1], 2));
}