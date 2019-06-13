/**
 * 791. Custom Sort String
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
    let res = ""
    let tMap = new Map();
    for (char of T)
        if (!tMap.has(char)) tMap.set(char, 1);
        else tMap.set(char, tMap.get(char) + 1);
    for (i = 0; i < S.length; i++) T = T.replace(new RegExp(S[i], "g"), "");
    for (char of S)
        if (tMap.get(char)) res += Array(tMap.get(char)).fill(char);
    return res.replace(/,/g, "") + T;
};