/**
 * 1018. Binary Prefix Divisible By 5
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
    let cur = 0;
    let res = [];
    for (let i = 0; i < A.length; i++) {
        cur = cur << 1;
        cur = cur % 5;
        cur += A[i];
        res.push(cur % 5 === 0);
    }
    return res;
};