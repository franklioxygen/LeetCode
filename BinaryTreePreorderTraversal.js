/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res = [];
    let helper = function(root) {
        if(!root) return;
        res.push(root.val)
        if(root.left!=null) helper(root.left);
        if(root.right!=null) helper(root.right);
    };
    helper(root);
    return res;
};
