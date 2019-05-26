/**
 * 371. Sum of Two Integers
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let nums = [a, b];
    return nums.reduce(function (accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue;
    });
};