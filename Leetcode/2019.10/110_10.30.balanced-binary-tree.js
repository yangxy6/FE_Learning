/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 * 227/227 cases passed (100 ms)
 * Your runtime beats 6.41 % of javascript submissions
 * Your memory usage beats 100 % of javascript submissions (37.4 MB)
 * 自底向顶（提前阻断法）:一旦子树出现不平衡情况一路返回-1
 */
var isBalanced = function(root) {
  return getHeight(root) !== -1;
  function getHeight(root) {
    if (!root) return 0;
    let leftCnt = getHeight(root.left);
    if (leftCnt === -1) return -1;
    let rightCnt = getHeight(root.right);
    if (rightCnt === -1) return -1;
    return Math.abs(leftCnt - rightCnt) <= 1 ? Math.max(leftCnt, rightCnt) + 1 : -1;
  }
};

/**
 * 227/227 cases passed (176 ms)
 * Your runtime beats 5.03 % of javascript submissions
 * Your memory usage beats 7.14 % of javascript submissions (39.9 MB)
 * @param {*} root
 * 从顶到底（暴力法）
 */
const isBalanced = function(root) {
  if (!root) return true;
  return (Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1) & isBalanced(root.left) & isBalanced(root.right);
  function getHeight(root) {
    if (!root) return 0;
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
  }
};

// [1,2,2,3,null,null,3,4,null,null,4]
// @lc code=endv
