/*
 * @lc app=leetcode id=226 lang=javascript
 * √ 68/68 cases passed (52 ms)
 * √ Your runtime beats 77.58 % of javascript submissions
 * √ Your memory usage beats 60 % of javascript submissions (33.8 MB)
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) return null;
  let right = invertTree(root.right);
  let left = invertTree(root.left);
  root.left = right;
  root.right = left;
  return root;
};
