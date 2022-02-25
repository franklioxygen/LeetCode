/**
 * 701. Insert into a Binary Search Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  let helper = node => {
    if (node.val > val) {
      if (node.left) helper(node.left);
      else {
        node.left = new TreeNode();
        node.left.val = val;
        return;
      }
    } else {
      if (node.right) helper(node.right);
      else {
        node.right = new TreeNode();
        node.right.val = val;
        return;
      }
    }
  };
  helper(root);
  return root;
};