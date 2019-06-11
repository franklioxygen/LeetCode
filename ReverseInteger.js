/**
 * 7. Reverse Integer
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let neg = x < 0 ? -1 : 1;
    x = parseInt(Math.abs(x).toString().split("").reverse().join(""), 10) * neg;
    if (x < -Math.pow(2, 31) || x > (Math.pow(2, 31) - 1)) return 0
    return x;
};