/**
 * 199. Binary Tree Right Side View
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    let res = [];
    let helper = (node, depth) => {
        if (!node) return;
        if (depth == res.length) res.push(node.val);
        helper(node.right, depth + 1);
        helper(node.left, depth + 1);
    };
    helper(root, 0);
    return res;
};

var rightSideView = function (root) {
    if (!root) return [];
    let res = [];
    let q = [];
    q.push(root);
    while (q.length != 0) {
        let len = q.length;
        for (i = 0; i < len; i++) {
            let curr = q.shift();
            if (i == len - 1) res.push(curr.val);
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right)
        }
    }
    return res;
};