/**
 * 872. Leaf-Similar Trees
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    if (root1 == root2) return true;
    let seq1 = [],
        seq2 = [];
    let helper = (node, seq) => {
        if (node.left) helper(node.left, seq);
        if (!node.left && !node.right) seq.push(node.val);
        if (node.right) helper(node.right, seq);
    }
    helper(root1, seq1);
    helper(root2, seq2);
    return seq1.join("") == seq2.join("");
};