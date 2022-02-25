/**
 * 814. Binary Tree Pruning
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  let helper = (node) => {
    if (!node) return node;
    node.left = helper(node.left);
    node.right = helper(node.right);
    return (node.val == 1 || node.left || node.right) ? node : null;
  };
  return helper(root);
};