/**
 * 806. Number of Lines To Write String
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
    let line = 0;
    let length = 0;

    for (i = 0; i < S.length; i++) {
        if (length + widths[S[i].charCodeAt(S[i]) - 97] <= 100) {
            length = length + widths[S[i].charCodeAt(S[i]) - 97];
        } else {
            line = line + 1;
            length = widths[S[i].charCodeAt(S[i]) - 97];
        }
    }
    return [line + 1, length];
};