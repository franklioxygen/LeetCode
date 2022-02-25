/**
 * 1038. Binary Search Tree to Greater Sum Tree
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
var bstToGst = function (root) {
  let max = 0;
  let findMax = node => {
    max = max > node.val ? max : node.val;
    if (node.left) findMax(node.left);
    if (node.right) findMax(node.right);
  };
  findMax(root);
  let sumList = [];
  for (i = max, curr = 0; i >= 0; i--) {
    curr += i;
    sumList.unshift(curr);
  }
  let greater = node => {
    node.val = sumList[node.val];
    if (node.left) greater(node.left);
    if (node.right) greater(node.right);
  };
  greater(root);
  return root;
};