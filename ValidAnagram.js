/**
 * 242. Valid Anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length == 0 && t.length == 0) return true;
    if (s.length != t.length) return false;
    for (i = 0; i < s.length;) {
        for (j = 0; j < t.length; j++) {
            if (s[i] == t[j]) {
                s = s.slice(0, i) + s.slice(i + 1, s.length);
                t = t.slice(0, j) + t.slice(j + 1, t.length);
                break;
            }
            if ((s[i] != t[j]) && (j == t.length - 1)) {
                return false;
            }

        }

    }
    return true;
};