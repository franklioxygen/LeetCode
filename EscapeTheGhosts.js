/**
 * 789. Escape The Ghosts
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {
  for (gho of ghosts)
    if (Math.abs(gho[0] - target[0]) + Math.abs(gho[1] - target[1]) <= Math.abs(target[0]) + Math.abs(target[1])) return false;
  return true;
};