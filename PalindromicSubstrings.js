/**
 * 647. Palindromic Substrings
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let res = 0;
    for (i = 1; i <= s.length; i++) {
        for (j = 0; j + i <= s.length; j++) {
            res += pal(s.slice(j, j + i));
        }
    }
    return res;
};
let pal = str => {
    let i, j;
    for (i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) return 0;
    }
    return 1;
};