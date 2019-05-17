/**
 * 500. Keyboard Row
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const set1 = new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]);
    const set2 = new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l", "A", "S", "D", "F", "G", "H", "J", "K", "L"]);
    const set3 = new Set(["z", "x", "c", "v", "b", "n", "m", "Z", "X", "C", "V", "B", "N", "M"]);
    let res = [];
    for (i = 0; i < words.length; i++) {
        for (j = 0; j < words[i].length; j++) {
            if (set1.has(words[i][j])) {
                if (j == words[i].length - 1) {
                    res.push(words[i]);
                    break;
                }
                continue;
            } else break;
        }
        for (j = 0; j < words[i].length; j++) {
            if (set2.has(words[i][j])) {
                if (j == words[i].length - 1) {
                    res.push(words[i]);
                    break;
                }
                continue;
            } else break;
        }
        for (j = 0; j < words[i].length; j++) {
            if (set3.has(words[i][j])) {
                if (j == words[i].length - 1) {
                    res.push(words[i]);
                    break;
                }
                continue;
            } else break;
        }
    }
    return res;
};