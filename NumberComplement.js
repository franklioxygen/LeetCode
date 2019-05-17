/**
 * 476. Number Complement
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let res = [];
    let bin = num.toString(2);
    for (i = 0; i < bin.length; i++) {
        bin[i] == "0" ? res[i] = "1" : res[i] = "0";
    }
    return parseInt(res.join(""), 2);
};