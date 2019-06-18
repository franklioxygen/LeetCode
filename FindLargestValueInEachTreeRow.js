/**
 * 515. Find Largest Value in Each Tree Row
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) return [];
    let res = [];
    let queue = [];
    queue.push(root);
    let max = -Infinity;
    while (queue.length > 0) {
        len = queue.length;
        for (i = 0; i < len; i++) {
            let node = queue.shift();
            max = max > node.val ? max : node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(max);
        max = -Infinity;
    }
    return res;
};