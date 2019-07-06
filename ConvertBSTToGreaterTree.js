/**
 * 538. Convert BST to Greater Tree
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
var convertBST = function (root) {
    if (!root) return null;
    let sum = 0;
    let helper = node => {
        if (!node) return;
        if (node.right) helper(node.right);
        sum += node.val;
        node.val = sum;
        if (node.left) helper(node.left);
    };
    helper(root);
    return root;
};