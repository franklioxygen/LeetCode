/**
 * 230. Kth Smallest Element in a BST
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  const all = []
  const helper = root => {
    if (root.val !== undefined) all.push(root.val)
    if (root.left) helper(root.left)
    if (root.right) helper(root.right)
  }
  helper(root)
  return all.sort(function (a, b) {
    return a - b
  })[k - 1]
}
