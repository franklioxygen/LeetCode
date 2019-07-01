/**
 * 429. N-ary Tree Level Order Traversal
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let res = [];
    let curr = [];
    let q = [];
    q.push(root);
    while (q.length != 0) {
        let len = q.length;
        for (i = 0; i < len; i++) {
            curr.push(q[0].val);
            for (child of q[0].children) q.push(child);
            q.shift();
        }
        res.push(curr);
        curr = [];
    }
    return res;
};