/**
 * 1021. Remove Outermost Parentheses
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    var outer = 0;
    var pNum = 0;
    var res = '';
    for (i = 0; i < S.length; i++) {
        if (outer == 0) {
            if (S[i] == '(') {
                outer = 1;
                pNum = 0;
            }
        } else { // outer=1
            if (S[i] == '(') pNum++;
            if (S[i] == ')') pNum--;
            if (pNum == -1)
                outer = 0;
            else res += S[i];
        }

    }
    return res;
};