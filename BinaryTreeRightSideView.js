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