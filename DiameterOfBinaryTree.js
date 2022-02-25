/**
 * 543. Diameter of Binary Tree
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
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  let res = 0;
  let helper = node => {
    if (!node) return 0;
    let leftNode = helper(node.left);
    let rightNode = helper(node.right);
    res = Math.max(leftNode + rightNode + 1, res);
    return Math.max(leftNode, rightNode) + 1;
  };
  helper(root);
  return res - 1;
};