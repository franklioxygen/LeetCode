/**
 * 1003. Check If Word Is Valid After Substitutions
 * @param {string} S
 * @return {boolean}
 */
var isValid = function (S) {
    let stack = [];
    for (letter of S) {
        if (letter != "c") stack.push(letter);
        else {
            if (stack[stack.length - 1] == "b" && stack[stack.length - 2] == "a") stack.splice(-2, 2);
            else return false;
        }
    }
    if (stack.length == 0) return true;
    else return false;
};