/**
 * 852. Peak Index in a Mountain Array
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
    let i = 0;
    while (A[i] < A[i + 1]) i++;
    return i;
};