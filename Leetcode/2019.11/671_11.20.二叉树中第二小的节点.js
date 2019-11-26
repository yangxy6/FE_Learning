/*
 * @lc app=leetcode.cn id=671 lang=javascript
 * 35/35 cases passed (64 ms)
 * Your runtime beats 82.61 % of javascript submissions
 * Your memory usage beats 25 % of javascript submissions (33.7 MB)
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function(root) {
  if (!root) return -1;
  return findValue(root, root.val);
};
function findValue(root, min) {
  if (root === null) return -1;
  if (root.val > min) return root.val; // 从上到下，从小到大
  let left = findValue(root.left, min);
  let right = findValue(root.right, min);
  if (left === -1) return right;
  if (right === -1) return left;
  return Math.min(left, right);
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let root = new TreeNode(2);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);
console.log(findSecondMinimumValue(root));
// @lc code=end
