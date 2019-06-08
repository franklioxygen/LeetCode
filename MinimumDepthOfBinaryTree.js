/**
 * 111. Minimum Depth of Binary Tree
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
var minDepth = function (root) {
    if (!root) return 0;
    let min = Infinity;

    function tDepth(node, treeDepth) {
        if (!node.left && !node.right) {
            min = Math.min(min, treeDepth);
            return treeDepth;
        } else {
            treeDepth++;
            if (node.left) tDepth(node.left, treeDepth);
            if (node.right) tDepth(node.right, treeDepth);
        }
    }
    tDepth(root, 1);
    return min;
};