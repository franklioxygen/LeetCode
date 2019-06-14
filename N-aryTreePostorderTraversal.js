/**
 * 590. N-ary Tree Postorder Traversal
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
var postorder = function (root) {
    let res = [];
    let helper = node => {
        if (!node) return res;
        for (child of node.children) helper(child);
        res.push(node.val);
        return res;
    }
    return helper(root);
};