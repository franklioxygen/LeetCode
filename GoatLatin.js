/**
 * 824. Goat Latin
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
    let vowel = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    S = S.split(" ");

    for (i = 0; i < S.length; i++) {
        if (vowel.has(S[i][0])) S[i] = S[i] + "ma" + as(i + 1);
        else S[i] = S[i].slice(1, S[i].length) + S[i][0] + "ma" + as(i + 1);
    }

    return S.join(" ");
};

function as(i) {
    let j;
    let as = "";
    for (j = 0; j < i; j++) as = as + "a";
    return as;
}