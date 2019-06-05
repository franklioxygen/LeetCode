/**
 * 482. License Key Formatting
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
    let res = [];
    S = S.toUpperCase().replace(/-/g, "");
    for (i = S.length - 1, j = 0; i >= 0; j++) {
        if (j != K) {
            res.push(S[i]);
            i--;
        } else {
            res.push("-");
            j = -1;
        }
    }
    return res.reverse().join("");
};