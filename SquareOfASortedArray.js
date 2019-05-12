/**
 * 977. Squares of a Sorted Array
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    let B = [];
    let small;
    let cut;
    var x = 0;
    for (i = 0; i < A.length; i++) A[i] *= A[i];
    for (j = 0; j < A.length;) {
        small = A[j];
        for (k = 0; k < A.length; k++) {
            if (A[k] <= small) {
                small = A[k];
                cut = k;
            }
        }
        A.splice(cut, 1);
        B[x++] = small;
    }
    return B;
};