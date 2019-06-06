/**
 * 367. Valid Perfect Square
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num == 1) return true;
    let start = (num - num % 2) / 2;
    while (start * start >= num) {
        if (start * start == num) return true;
        start -= 1;
    }
    return false;
};