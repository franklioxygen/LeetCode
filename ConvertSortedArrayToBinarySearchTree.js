/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  let treeNode = new TreeNode;
  treeNode.val= nums[Math.floor(nums.length/2)]; 
  let leftNums = nums.slice(0,Math.floor(nums.length/2));
  let rightNums = nums.slice(Math.floor(nums.length/2)+1, nums.length);
  if(leftNums.length<=0) {treeNode.left = null;}
  else {
    treeNode.left = sortedArrayToBST(leftNums);
  }
  if(rightNums.length<=0) {treeNode.right = null;}
  else {
    treeNode.right = sortedArrayToBST(rightNums);
  }
  return treeNode;
};
