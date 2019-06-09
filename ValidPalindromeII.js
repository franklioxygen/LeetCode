/**
 * 680. Valid Palindrome II
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let odd = s.length % 2 == 0 ? 1 : 0;
    for (i = 0; i < s.length; i++)
        if (s[i] != s[s.length - i - 1]) return (s.slice(i + 1, Math.ceil(s.length / 2)) == s.slice(s.length / 2 + 1, s.length - i).split("").reverse().join("") || s.slice(i, s.length / 2 - odd) == s.slice(s.length / 2, s.length - i - 1).split("").reverse().join(""));
    return true;
};