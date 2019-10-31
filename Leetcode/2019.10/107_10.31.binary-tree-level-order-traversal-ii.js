/*
 * @lc app=leetcode id=107 lang=javascript
 * 34/34 cases passed (48 ms)
 * Your runtime beats 97.53 % of javascript submissions
 * Your memory usage beats 33.33 % of javascript submissions (35 MB)
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  let stack = [];
  stack.push(root);
  let result = [];
  while (stack.length > 0) {
    let Len = stack.length;
    let temp = [];
    while (Len > 0) {
      let node = stack.shift();
      temp.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
      Len--;
    }
    result.push(temp);
  }
  return result.reverse();
};
// @lc code=end
