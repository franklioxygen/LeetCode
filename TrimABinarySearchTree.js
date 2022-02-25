/**
 * 669. Trim a Binary Search Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {
  let helper = node => {
    if (node == null) return null;
    if (node.val < L) return helper(node.right);
    if (node.val > R) return helper(node.left);
    node.left = helper(node.left);
    node.right = helper(node.right);
    return node;
  };
  return helper(root);
};