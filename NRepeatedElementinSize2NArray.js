/**
 * 961. N-Repeated Element in Size 2N Array
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    let s = new Set();
    for (let i of A) {
        if (s.has(i)) return i;
        else s.add(i);
    }
};