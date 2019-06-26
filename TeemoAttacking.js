/**
 * 495. Teemo Attacking
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    if (timeSeries.length == 0) return 0;
    let res = 0;
    let start;
    for (i = 1, start = 0; i < timeSeries.length; i++) {
        if (timeSeries[i] - timeSeries[i - 1] >= duration) {
            res += duration + (timeSeries[i - 1] - timeSeries[start]);
            start = i;
        }
        if (i == timeSeries.length - 1) {
            res += (timeSeries[i] - timeSeries[start]);
        }
    }
    return res + duration;
};