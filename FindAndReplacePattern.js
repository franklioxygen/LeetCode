/**
 * 890. Find and Replace Pattern
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    pattern = pattern.split("");
    let sPatt = new Set();
    let res = [];
    let target = "";
    for (word of words) {
        if (word.length != pattern.length) continue;
        oriWord = word;
        word = word.split("")
        let changed = Array(word.length).fill(0);
        for (i = 0; i < pattern.length; i++) {
            if (!sPatt.has(pattern[i])) {
                sPatt.add(pattern[i]);
                target = word[i];
                for (j = 0; j < word.length; j++) {
                    if ((word[j] == target) && (changed[j] != 1)) {
                        word[j] = pattern[i];
                        changed[j] = 1;
                    }
                }
            }
        }
        if (pattern.join("") == word.join("")) res.push(oriWord);
        sPatt.clear();
    }
    return res;
};