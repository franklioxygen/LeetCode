/**
 * 102. Binary Tree Level Order Traversal
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
var levelOrder = function (root) {
    if (!root) return [];
    let res = [];
    let curr = [];
    let q = [];
    q.push(root);
    while (q.length != 0) {
        let len = q.length;
        for (i = 0; i < len; i++) {
            let node = q.shift();
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
            curr.push(node.val);
        }
        res.push(curr);
        curr = [];
    }
    return res;
};