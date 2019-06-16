/**
 * 897. Increasing Order Search Tree
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
var increasingBST = function (root) {
    if (!root.left && !root.right) return root;
    if (!root) return null;
    let list = [];
    let helper = node => {
        if (node.left) helper(node.left);
        list.push(node.val);
        if (node.right) helper(node.right);
    }
    helper(root);
    let newNode = new TreeNode();
    let helper2 = node => {
        node.val = list[0];
        list.shift();
        if (list.length < 1) return;
        node.right = new TreeNode();
        helper2(node.right);
    }
    helper2(newNode);
    return newNode;
};