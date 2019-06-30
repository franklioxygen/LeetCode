/**
 * 29. Divide Two Integers
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let neg = 1;
    let res = 0;
    if ((dividend < 0 && divisor > 0) || dividend > 0 && divisor < 0) neg = -1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let ret = res => {
        res = res * neg;
        if (res > 2147483647) return 2147483647;
        if (res < -2147483648) return -2147483647;
        return res;
    };
    if (divisor == 1) return ret(dividend);
    while (dividend >= divisor) {
        dividend -= divisor;
        res++;
    }
    return ret(res);
};