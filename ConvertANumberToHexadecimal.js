/**
 * 405. Convert a Number to Hexadecimal
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    let res = [];
    i = 1;
    let table = "0123456789abcdef";
    if (num == 0) return "0";
    if (num < 0) num += Math.pow(2, 32);
    while (num != 0) {
        res.push(table[num % Math.pow(16, i) / Math.pow(16, i - 1)]);
        num = (num - num % Math.pow(16, i));
        i += 1;
    }
    return res.reverse().join("");
};