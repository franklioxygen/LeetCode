/**
 * 589. N-ary Tree Preorder Traversal
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    let res = [];
    let helper = node => {
        if (!node) return res;
        res.push(node.val);
        for (child of node.children) helper(child);
        return res;
    }
    return helper(root);
};