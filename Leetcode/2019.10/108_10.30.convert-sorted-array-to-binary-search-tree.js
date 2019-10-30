/*
 * @lc app=leetcode id=108 lang=javascript
 * 
 * [108] Convert Sorted Array to Binary Search Tree
 * 32/32 cases passed (68 ms)
 * Your runtime beats 59.6 % of javascript submissions
 * Your memory usage beats 34.61 % of javascript submissions (37.7 MB)
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 *  误区：高度平衡的二叉搜索树：高度差不超过1，不是值
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  let root = new TreeNode(null);
  let mid = Math.floor(nums.length / 2);
  root.val = nums[mid];
  root.left = sortedArrayToBST(nums.splice(0, mid));
  root.right = sortedArrayToBST(nums.splice(1)); //左子树已经splice出nums数组
  return root;
};
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
// @lc code=end
