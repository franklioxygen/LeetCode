/**
 * 748. Shortest Completing Word
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    let newWords = words.slice(0);
    let plateLetter = [];
    let pos = 0;
    let min = 1001;

    for (i = 0; i < licensePlate.length; i++) {
        if (isLetter(licensePlate[i])) plateLetter.push(licensePlate[i].toLowerCase());
    }
    for (i = 0; i < words.length; i++) {
        for (k = 0; k < plateLetter.length; k++) {
            for (j = 0; j < words[i].length; j++) {
                if (plateLetter[k] == words[i][j]) {
                    words[i] = words[i].slice(0, j) + words[i].slice(j + 1, words[i].length);
                    if (k == plateLetter.length - 1) {
                        if (newWords[i].length < min) {
                            min = newWords[i].length;
                            pos = i;
                        }
                    }
                    break;
                }
                if (j == words[i].length - 1) k = plateLetter.length;
            }

        }
    }
    return newWords[pos];
};

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}