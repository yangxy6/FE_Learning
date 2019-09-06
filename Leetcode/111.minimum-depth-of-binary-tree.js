/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
var minDepth = function(root) {
  if (root == null) {
    return 0;
  }
  if (root.left == null && root.right == null) {
    return 1;
  }
  let result = Number.MAX_SAFE_INTEGER;
  if (root.left != null) {
    result = Math.min(minDepth(root.left), result);
  }
  if (root.right != null) {
    result = Math.min(minDepth(root.right), result);
  }
  return result + 1;
};
