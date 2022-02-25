/**
 * 965. Univalued Binary Tree
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
var isUnivalTree = function (root) {
  if (!root) return true;
  let rootVal = root.val;
  let check = node => {
    if (!node) return true;
    return (node.val == rootVal) && check(node.left) && check(node.right);
  };
  return check(root);
};