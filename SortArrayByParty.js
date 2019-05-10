/**
 * 905. Sort Array By Parity
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    var even = [];
    var odd = [];

    for (i = 0; i < A.length; i++) {
        if (A[i] % 2 == 0) even.push(A[i]);
        else odd.push(A[i]);
    }
    return even.concat(odd);
};