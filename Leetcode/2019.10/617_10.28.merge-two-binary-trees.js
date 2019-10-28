/*
 * @lc app=leetcode id=617 lang=javascript
 * 183/183 cases passed (88 ms)
 * Your runtime beats 75.28 % of javascript submissions
 * Your memory usage beats 84.62 % of javascript submissions (40.2 MB)
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (t1 === null) {
    return t2;
  }
  if (t2 === null) {
    return t1;
  }
  t2.val = t1.val + t2.val;
  // 关键mergeTrees递归后需要赋值给t2.left
  t2.left = mergeTrees(t1.left, t2.left);
  t2.right = mergeTrees(t1.right, t2.right);
  return t2;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let t1 = new TreeNode(1);
t1.left = new TreeNode(3);
t1.right = new TreeNode(2);
t1.left.left = new TreeNode(5);
t1.left.right = new TreeNode(5);
let t2 = new TreeNode(2);
t2.left = new TreeNode(1);
t2.right = new TreeNode(3);
t2.left.right = new TreeNode(4);
t2.right.right = new TreeNode(7);
console.log(mergeTrees(t1, t2));
// @lc code=end
