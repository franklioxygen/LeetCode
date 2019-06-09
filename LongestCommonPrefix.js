/**
 * 14. Longest Common Prefix
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return "";
    let res = [];
    for (i = 0; i < strs[0].length; i++) {
        for (j = 0; j < strs.length; j++) {
            if (strs[0][i] == strs[j][i]) {
                if (j == strs.length - 1) res.push(strs[0][i]);
                continue;
            } else return res.join("");
        }
    }
    return res.join("");
};