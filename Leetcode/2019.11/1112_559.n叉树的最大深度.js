/*
 * @lc app=leetcode.cn id=559 lang=javascript
 * 36/36 cases passed (676 ms)
 * Your runtime beats 79.63 % of javascript submissions
 * Your memory usage beats 71.23 % of javascript submissions (77.4 MB)
 * [559] N叉树的最大深度
 * 思路：基本和二叉树一样，n叉树需要循环节点
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let dep = 0;
  for (const item in root.children) {
    dep = Math.max(maxDepth(root.children[item]), dep);
  }
  return dep + 1;
};
// @lc code=end
