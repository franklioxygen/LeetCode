/**
 * 687. Longest Univalue Path
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let res = 0;
  let helper = node => {
    if (!node) return 0;
    let left = helper(node.left);
    let right = helper(node.right);
    let leftPath = 0;
    let rightPath = 0;
    if (node.left && node.val === node.left.val) leftPath = left + 1;
    if (node.right && node.val == node.right.val) rightPath = right + 1;
    res = Math.max(res, leftPath + rightPath);
    return Math.max(leftPath, rightPath);
  };
  helper(root);
  return res;
};