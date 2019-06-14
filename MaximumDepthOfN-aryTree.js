/**
 * 559. Maximum Depth of N-ary Tree
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
    let res = 0;
    let curr = 1;
    let helper = (node, curr) => {
        if (!node) return;
        if (node.children.length == 0) res = Math.max(res, curr);
        for (child of node.children) {
            helper(child, curr + 1);
        }
    }
    helper(root, curr);
    return res;
};