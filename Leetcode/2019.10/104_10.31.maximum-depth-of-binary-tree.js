/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * 39/39 cases passed (60 ms)
 * Your runtime beats 77.68 % of javascript submissions
 * Your memory usage beats 6.25 % of javascript submissions (37.9 MB)
 * @param {TreeNode} root
 * @return {number}
 * 递归路径
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let arr = [];
  path(root, 0);
  return arr.sort((a, b) => b - a)[0];
  function path(node, count) {
    if (!node) return;
    count++;
    if (!node.left && !node.right) {
      arr.push(count);
    } else {
      path(node.right, count);
      path(node.left, count);
    }
  }
};

/**
 * 39/39 cases passed (56 ms)
 * Your runtime beats 92.01 % of javascript submissions
 * Your memory usage beats 96.88 % of javascript submissions (36.9 MB)
 * @param {TreeNode} root
 * 递归——深度
 */
const maxDepth = function(root) {
  if (!root) return 0;
  return depth(root);
  function depth(node) {
    if (!node) return 0;
    let left = depth(node.left);
    let right = depth(node.right);
    return Math.max(left, right) + 1;
  }
};

/**
 * 39/39 cases passed (64 ms)
 * Your runtime beats 53.24 % of javascript submissions
 * Your memory usage beats 87.5 % of javascript submissions (36.9 MB)
 * @param {TreeNode} root
 * 广度遍历——层级计算
 */
const maxDepth = function(root) {
  if (!root) return 0;
  let queue = [];
  let depth = 0;
  queue.push(root);
  while (queue.length > 0) {
    let cnt = queue.length;
    while (cnt > 0) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      cnt--;
    }
    depth++;
  }
  return depth;
};
// @lc code=end
