/**
 * 637. Average of Levels in Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root) return [];
  let res = [];
  let avg = [];
  let q = [];
  let helper = (node, depth) => {
    if (res.length <= depth) res.push([]);
    res[depth].push(node.val);
    if (!node.left && !node.right) return;
    if (node.left) helper(node.left, depth + 1);
    if (node.right) helper(node.right, depth + 1);
  };
  helper(root, 0);
  for (vals of res) avg.push(vals.reduce((a, b) => {
    return a + b;
  }) / (vals.length));
  return avg;
};