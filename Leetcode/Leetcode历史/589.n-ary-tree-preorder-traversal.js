/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let arr = [];
  function preOrderTree(node) {
    if (!node) {
      return arr;
    }
    arr.push(node.val);
    for (let i = 0; i < node.children.length; i++) {
      preOrderTree(node.children[i]);
    }
    return arr;
  }
  return preOrderTree(root);
};
console.log(
  preorder({
    $id: '1',
    children: [{ $id: '2', children: [{ $id: '5', children: [], val: 5 }, { $id: '6', children: [], val: 6 }], val: 3 }, { $id: '3', children: [], val: 2 }, { $id: '4', children: [], val: 4 }],
    val: 1
  })
);
