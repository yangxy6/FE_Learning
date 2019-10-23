/*
 * @lc app=leetcode id=563 lang=javascript
 *
 * [563] Binary Tree Tilt
 */
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
var findTilt = function(root) {
  let sum = 0;
  nodeTilt(root);
  return sum;

  function nodeTilt(root) {
    if (!root) {
      return 0;
    }
    const leftSum = nodeTilt(root.left);
    const rightSum = nodeTilt(root.right);
    sum = sum + Math.abs(leftSum - rightSum);
    return root.val + leftSum + rightSum;
  }
};
