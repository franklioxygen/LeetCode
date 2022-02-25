/**
 * 1022. Sum of Root To Leaf Binary Numbers
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
var sumRootToLeaf = function (root) {
  let res = [];
  let helper = (node, curr) => {
    if (!node) return;
    curr += node.val;
    if (!node.left && !node.right) {
      res.push(curr);
      return;
    }
    helper(node.left, curr);
    helper(node.right, curr);
  };

  helper(root, []);
  return res.reduce((a, b) => {
    return a += parseInt(b, 2);
  }, 0);
};