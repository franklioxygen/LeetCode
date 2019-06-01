/**
 * 720. Longest Word in Dictionary
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    let wordsSet = new Set(words);
    let res = [];
    let max = 0;

    for (i = 0; i < words.length; i++) {
        for (j = words[i].length - 1; j >= 0; j--) {
            if (!wordsSet.has(words[i].slice(0, j + 1))) break;
            else {
                if (j == 0) {
                    max = max > words[i].length ? max : words[i].length;
                    if (words[i].length == max) res.push(words[i]);
                }
                continue;
            }
        }
    }
    res = res.filter(function (word) {
        return word.length == max;
    });
    return res.sort()[0];
};