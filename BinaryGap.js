/**
 * 868. Binary Gap
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
    let res = 0;
    let s = N.toString(2);
    while (s.indexOf(1) != -1) {
        s = s.substr(s.indexOf(1) + 1, s.length);
        res = res < (s.indexOf(1) + 1) ? (s.indexOf(1) + 1) : res;
    }
    return res;
};