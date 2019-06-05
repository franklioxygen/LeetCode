/**
 * 38. Count and Say
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n == 1) return "1";
    let str = "1";
    let count = 1;
    let s = "";
    for (i = 1; i < n; i++) {
        for (j = 0; j < str.length; j++) {
            if (str[j] == str[j + 1]) count++;
            else {
                s = s + count + str[j];
                count = 1;
            }
        }
        str = s;
        s = "";
    }
    return str;
};