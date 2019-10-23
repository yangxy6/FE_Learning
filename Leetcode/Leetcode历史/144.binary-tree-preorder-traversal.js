/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 */
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
 * 先打印root->前序遍历->中左右
 */
var preorderTraversal = function(root) {
  let arr = [];
  preOrder(root, arr);
  return arr;
};
const preOrder = function(root, arr) {
  if (!root) {
    return;
  }
  arr.push(root.val);
  preOrder(root.left, arr);
  preOrder(root.right, arr);
};
