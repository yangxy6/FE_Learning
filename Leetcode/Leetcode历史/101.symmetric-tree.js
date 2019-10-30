/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree 对称树
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
 * @return {boolean}
 * 思路：中序遍历成回温数组，在通过字符串比较
 * 叶子节点是空节点？测试案例未全部通过
 */
var isSymmetric = function(root) {
  // [1,2,2,2,null,2] 未通过
  let arr = [];
  inOrderTraverseNode(root);
  return arr.join('') === arr.reverse().join('');
  function inOrderTraverseNode(node) {
    if (node !== null) {
      inOrderTraverseNode(node.left);
      arr.push(node.val);
      inOrderTraverseNode(node.right);
    }
  }
};

/**
 * √ 195/195 cases passed (60 ms)
 * √ Your runtime beats 74.44 % of javascript submissions
 * √ Your memory usage beats 74.24 % of javascript submissions (35.5 MB)
 * @param {TreeNode} root
 * @return {boolean}
 * 思路：有null节点时左右同时判断空节点，没有空节点时递归判断左右两边val
 */
const isSymmetric = function(root) {
  if (root === null) return true;
  return isMirror(root.left, root.right); //问题变成判断两个树是否相等
  function isMirror(left, right) {
    // 有null节点
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    // left.left与right.right，right.left与left.right成镜像对称
    return left.val === right.val && isMirror(left.left, right.right) && isMirror(right.left, left.right);
  }
};
