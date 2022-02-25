/**
 * 682. Baseball Game
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let scores = [];

  for (i = 0; i < ops.length; i++) {
    if (Number.isInteger(parseInt(ops[i], 10))) scores.push(parseInt(ops[i], 10));
    if (ops[i] == 'C') scores.pop();
    if (ops[i] == 'D') scores.push(scores[scores.length - 1] * 2);
    if (ops[i] == '+') scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
  }
  return scores.reduce(function (acc, curr) {
    return acc + curr;
  });
};