/*
 * @lc app=leetcode id=94 lang=javascript
 * 68/68 cases passed (52 ms)
 * Your runtime beats 78.62 % of javascript submissions
 * Your memory usage beats 81.25 % of javascript submissions (33.7 MB)
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 * 中序非递归版——栈
 */
var inorderTraversal = function(root) {
  let result = [];
  let stack = [];
  while (stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left;
      continue;
    } else {
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }
  }
  return result;
};
// @lc code=end
