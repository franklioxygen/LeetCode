/**
 * 338. Counting Bits
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let res = [];
    for (i = 0; i <= num; i++) {
        res.push(i.toString(2).replace(/0/g, "").length);
    }
    return res;
};