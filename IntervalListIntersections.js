/**
 * 986. Interval List Intersections
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
    let res = []
    for (areaA of A) {
        for (areaB of B) {
            if (areaB[0] > areaA[1]) break;
            if (Math.max(areaA[0], areaB[0]) <= Math.min(areaA[1], areaB[1]))
                res.push([Math.max(areaA[0], areaB[0]), Math.min(areaA[1], areaB[1])]);
        }
    }
    return res;
};