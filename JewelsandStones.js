/**
 * 771. Jewels and Stones
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let res = 0;
    for (i = 0; i < J.length; i++) {
        for (j = 0; j < S.length; j++) {
            if (J[i] == S[j]) res++;

        }
    }
    return res;

};