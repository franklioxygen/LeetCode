/**
 * 671. Second Minimum Node In a Binary Tree
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
var findSecondMinimumValue = function (root) {
  let valSet = new Set();

  let helper = node => {
    if (!valSet.has(node.val)) valSet.add(node.val);
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  };
  helper(root);
  valSet = Array.from(valSet).sort((a, b) => {
    return a - b;
  }).sort();
  if (valSet.length > 1) return valSet[1];
  else return -1;
};