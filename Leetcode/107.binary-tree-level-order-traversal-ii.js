/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 * 后序遍历-> 左右中
 */
var levelOrderBottom = function(root) {
  let arr = [];
  let rootVal = postOrder(root);
  if (rootVal) {
    arr.push([rootVal]);
  }

  return arr;

  function postOrder(root) {
    if (!root) {
      return false;
    }
    let leftValue = postOrder(root.left);
    let rightValue = postOrder(root.right);
    if (leftValue && rightValue) {
      arr.push([leftValue, rightValue]);
    }
    if (!leftValue && rightValue) {
      arr.push([rightValue]);
    }
    if (leftValue && !rightValue) {
      arr.push([leftValue]);
    }

    return root.val;
  }
};
