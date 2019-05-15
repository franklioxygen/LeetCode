/**
 * 908. Smallest Range I
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
    let min = A[0],
        max = A[0];
    for (i = 0; i < A.length; i++) {
        if (A[i] <= min) min = A[i];
        if (A[i] >= max) max = A[i];
    }
    return ((max - Math.abs(K)) - (min + Math.abs(K))) > 0 ? ((max - Math.abs(K)) - (min + Math.abs(K))) : 0;
};