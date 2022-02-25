/**
 * 226. Invert Binary Tree
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
var invertTree = function (root) {
  if (!root) return root;
  let helper = node => {
    [node.left, node.right] = [node.right, node.left];
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  };
  helper(root);
  return root;
};