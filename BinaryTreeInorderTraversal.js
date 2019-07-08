/**
 * 94. Binary Tree Inorder Traversal
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
var inorderTraversal = function (root) {
    let res = [];
    let helper = node => {
        if (!node) return null;
        if (node.left) helper(node.left);
        res.push(node.val);
        if (node.right) helper(node.right);
    };
    helper(root);
    return res;
};