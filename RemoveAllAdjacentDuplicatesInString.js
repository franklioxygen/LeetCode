/**
 * 1047. Remove All Adjacent Duplicates In String
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    let sOld;
    while (sOld != S) {
        sOld = S;
        S = removeAdj(S);
    }
    return S;
};

function removeAdj(S) {
    let i;
    for (i = 0; i < S.length; i++) {
        if (S[i] == S[i + 1]) {
            S = S.slice(0, i) + S.slice(i + 2, S.length);
        }
    }
    return S;
}