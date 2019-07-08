/**
 * 654. Maximum Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    let helper = (node, nums) => {
        let maxPos = nums.indexOf(Math.max(...nums));
        node.val = nums[maxPos];
        let L = nums.slice(0, maxPos);
        let R = nums.slice(maxPos + 1, nums.length);
        if (L.length != 0) {
            node.left = new TreeNode();
            helper(node.left, L)
        }
        if (R.length != 0) {
            node.right = new TreeNode();
            helper(node.right, R)
        }
    };
    let root = new TreeNode();
    helper(root, nums)
    return root;
};