/**
 * 107. Binary Tree Level Order Traversal II
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root == null) return [];
  let res = [];
  let cur = [];
  let q = [];
  q.push(root);
  while (q.length != 0) {
    let len = q.length;
    for (let i = 0; i < len; i++) {
      cur.push(q[0].val);
      let root = q.shift();
      if (root.left) q.push(root.left);
      if (root.right) q.push(root.right);
    }
    res.unshift(cur);
    cur = [];
  }
  return res;
};