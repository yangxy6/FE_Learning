/*
 * @lc app=leetcode id=112 lang=javascript
 * 114/114 cases passed (64 ms)
 * Your runtime beats 69.4 % of javascript submissions
 * Your memory usage beats 55.56 % of javascript submissions (37.3 MB)
 * [112] Path Sum
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  let arr = [];
  path(root, 0);
  return arr.includes(sum);
  function path(node, count) {
    if (!node) return;
    count += node.val;
    if (node.left == null && node.right == null) {
      arr.push(count);
    } else {
      path(node.left, count);
      path(node.right, count);
    }
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let root = new TreeNode(2);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.right.right = new TreeNode(7);
root.right.left = new TreeNode(6);
// root.right.left.left = new TreeNode(8);
console.log(hasPathSum(root, 12));
// @lc code=end
