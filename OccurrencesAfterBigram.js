/**
 * 1078. Occurrences After Bigram
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    let res = []
    text = text.split(" ");
    for (i = text.length - 1; i >= 0; i--)
        if (text[i - 2] == first && text[i - 1] == second) res.push(text[i]);
    return res.reverse();
};