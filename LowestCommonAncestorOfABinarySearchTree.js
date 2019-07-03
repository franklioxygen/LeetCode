/**
 * 235. Lowest Common Ancestor of a Binary Search Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let helper = node => {
        if (node.val < p.val) return helper(node.right);
        if (node.val > q.val) return helper(node.left);
    };
    return root;
};