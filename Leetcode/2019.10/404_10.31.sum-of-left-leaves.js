/*
 * @lc app=leetcode id=404 lang=javascript
 * 102/102 cases passed (60 ms)
 * Your runtime beats 44.21 % of javascript submissions
 * Your memory usage beats 100 % of javascript submissions (34.8 MB)
 * [404] Sum of Left Leaves
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  let sum = 0;
  inorder(root, 'root');
  function inorder(node, flag) {
    if (!node) return;
    if (node.left === null && node.right === null && flag === 'left') {
      sum += node.val;
    }
    inorder(node.left, 'left');
    inorder(node.right, 'right');
  }
  return sum;
};
// [0,2,4,1,null,3,-1,5,1,null,6,null,8]
// @lc code=end
