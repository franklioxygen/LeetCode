/**
 * 946. Validate Stack Sequences
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = [];
    for (i = 0, j = 0; popped.length != 0;) {
        if (pushed[i] === popped[j]) {
            pushed.shift();
            popped.shift();
        }
        if (stack[stack.length - 1] === popped[j]) {
            stack.pop();
            popped.shift();
        } else if (pushed.length != 0) {
            stack.push(pushed[i]);
            pushed.shift();
        }
        if (pushed.length == 0 && stack[stack.length - 1] != popped[0]) return false;
    }
    return true;
};