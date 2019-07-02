/**
 * 563. Binary Tree Tilt
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
var findTilt = function (root) {
    let tilt = 0;
    let helper = node => {
        if (!node) return 0;
        let leftNode = helper(node.left);
        let rightNode = helper(node.right);
        tilt += Math.abs(leftNode - rightNode);
        return node.val + leftNode + rightNode;
    };
    helper(root);
    return tilt;
};