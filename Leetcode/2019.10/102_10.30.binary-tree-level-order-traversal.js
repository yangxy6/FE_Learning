/*
 * @lc app=leetcode id=102 lang=javascript
 * 34/34 cases passed (64 ms)
 * Your runtime beats 26.75 % of javascript submissions
 * Your memory usage beats 64.71 % of javascript submissions (34.9 MB)
 * [102] Binary Tree Level Order Traversal
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
 * 层序遍历——队列
 */
var levelOrder = function(root) {
  if (!root) return [];
  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let count = queue.length; //每个层级的个数就是队列的个数
    let temp = [];
    while (count > 0) {
      let node = queue.shift();
      temp.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      count--;
    }
    result.push(temp);
  }
  return result;
};
// @lc code=end
