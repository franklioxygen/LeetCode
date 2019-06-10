/**
 * 28. Implement strStr()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == "") return 0;
    for (i = 0; i < haystack.length; i++) {
        if (needle[0] == haystack[i]) {
            for (j = 0; j < needle.length; j++) {
                if (needle[j] == haystack[i + j]) {
                    if (j == needle.length - 1) return i;
                    continue;
                } else break;
            }
        }

    }
    return -1;
};