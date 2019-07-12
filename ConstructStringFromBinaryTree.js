/**
 * 606. Construct String from Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
    let res = "";
    let helper = node => {
        if (!node) return "";
        let val = node.val;
        res += val.toString(10);
        if (node.left) {
            res += "(";
            helper(node.left);
            res += ")"
        }
        if (node.right) {
            if (!node.left) res += "()";
            res += "(";
            helper(node.right);
            res += ")";
        }
    };
    helper(t);
    return res;
};