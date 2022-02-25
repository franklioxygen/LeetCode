/**
 * 938. Range Sum of BST
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
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  if (!root) return 0;
  let sum = 0;
  let helper = node => {
    if (!node) return;
    if (node.val >= L && node.val <= R) sum += node.val;
    helper(node.left);
    helper(node.right);
  };
  helper(root);
  return sum;
};