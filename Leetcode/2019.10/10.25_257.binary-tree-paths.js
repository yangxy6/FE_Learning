/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * 209/209 cases passed (64 ms)
 * Your runtime beats 31.29 % of javascript submissions
 * Your memory usage beats 100 % of javascript submissions (34.4 MB)
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let ans = [];
  path(root, '');
  return ans;
  // str直接传入path中，可以实时保存之前累加的str
  function path(node, str) {
    if (!node) return;
    str += node !== root ? '->' + node.val : node.val;
    if (node.left === null && node.right === null) {
      ans.push(str);
    } else {
      path(node.left, str);
      path(node.right, str);
    }
  }
};
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
// let root = new TreeNode(2);
// root.left = new TreeNode(4);
// root.right = new TreeNode(5);
// root.right.right = new TreeNode(7);
// root.right.left = new TreeNode(6);
// root.right.left.left = new TreeNode(8);
// console.log(binaryTreePaths(root));
// @lc code=end
