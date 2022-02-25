/**
 * 20. Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  s = s.split('');
  let stack = [];
  for (i = 0; i < s.length; i++) {
    if (s[i] == '{' || s[i] == '[' || s[i] == '(') stack.push(s[i]);
    if (s[i] == '}')
      if (stack[stack.length - 1] == '{') stack.pop();
      else return false;
    if (s[i] == ']')
      if (stack[stack.length - 1] == '[') stack.pop();
      else return false;
    if (s[i] == ')')
      if (stack[stack.length - 1] == '(') stack.pop();
      else return false;
  }
  return stack.length == 0;
};