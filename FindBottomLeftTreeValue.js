/**
 * 513. Find Bottom Left Tree Value
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
var findBottomLeftValue = function (root) {
  let res;
  let curr = [];
  let q = [];
  q.push(root);
  while (q.length != 0) {
    let len = q.length;
    for (i = 0; i < len; i++) {
      curr = q.shift();
      if (i == 0) res = curr.val;
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
  }
  return res;
};