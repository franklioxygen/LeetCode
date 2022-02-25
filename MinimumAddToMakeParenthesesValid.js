/**
 * 921. Minimum Add to Make Parentheses Valid
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  let stack = [];
  for (pa of S) {
    if (pa == '(') {
      stack.push('(');
      continue;
    } else {
      if (stack[stack.length - 1] == '(') {
        stack.pop();
        continue;
      } else stack.push(')');
    }
  }
  return stack.length;
};