/**
 * 396. Rotate Function
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function (A) {
    let sum = 0;
    let f = 0;
    let n = A.length;
    for (i = 0; i < n; i++) {
        sum += A[i]
        f += i * A[i];
    }
    let res = f;
    for (i = 1; i < n; i++) {
        f = f + sum - n * A[n - i];
        res = res > f ? res : f;
    }
    return res;
};