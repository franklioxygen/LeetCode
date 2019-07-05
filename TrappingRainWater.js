/**
 * 42. Trapping Rain Water
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let res = 0;
    let peaks = [];
    height.unshift(0);
    height.push(0);
    let calWater = (peak1, peak2) => {
        let water = 0;
        let minHeight = Math.min(peak1[1], peak2[1]);
        for (let i = peak1[0]; i < peak2[0]; i++) {
            water += (minHeight - height[i]) > 0 ? (minHeight - height[i]) : 0;
        }
        return water;
    };
    let top = Math.max(...height);
    let pos = height.indexOf(top);
    peaks.push([0, 0]);
    for (i = 1; i < height.length; i++) {
        if (i <= pos) {
            if (height[i] >= peaks[peaks.length - 1][1]) peaks.push([i, height[i]])
        } else {
            peaks.push([i, height[i]]);
            while (peaks[peaks.length - 2][1] < peaks[peaks.length - 1][1]) {
                peaks.splice(peaks.length - 2, 1);
            }
        }
    }
    for (i = 0; i < peaks.length - 1; i++) {
        res += calWater(peaks[i], peaks[i + 1]);
    }
    return res;
};