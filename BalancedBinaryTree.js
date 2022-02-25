/**
 * 110. Balanced Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root == null || (root.left == null && root.right == null)) return true;
  if (Math.abs(depth(root.left) - depth(root.right)) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
};

function depth(root) {
  if (root == null) return 0;
  return 1 + Math.max(depth(root.left), depth(root.right));
}