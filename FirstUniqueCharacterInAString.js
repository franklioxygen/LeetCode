/**
 * 387. First Unique Character in a String
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let collection = new Set();
    let repeat = new Set();
    for (i = 0; i < s.length; i++) {
        if (!collection.has(s[i])) collection.add(s[i]);
        else repeat.add(s[i]);
    }
    for (i = 0; i < s.length; i++)
        if (!repeat.has(s[i])) return i;
    return -1;
};