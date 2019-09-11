/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.father = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @return {TreeNode}
 */
// var inorderSuccessor = function(p) {
//   let current = p;
// //   console.log(current)
//   // 1 有右子树，下节点是右子树最左子节点
//   if (current.right!==null) {
//     current = current.right;
//     while (current.left !== null) {
//       current = current.left;
//     }
//     return current;
//   }
//   // 2 是父节点的左节点，下一节点是父节点
//   if (current.father && current === current.father.left) {
//     return current.father;
//   }
//   // 3 没有右子树，同时是父节点的右节点，下节点是找到父父节点左节点，是左节点的父节点
//   if (current.father && !current.right && current === current.father.right) {
//     while (current === current.father.left) { // 此处判断条件有误，应该是current.father!==null
//       current = current.father;
//     }
//     if (current.father) {
//       return current.father;
//     } else {
//       return null;
//     }
//   }
// };

var inorderSuccessor = function(p) {
  let current = p;
  // 1 有右子树，下节点是右子树最左子节点
  if (current.right !== null) {
    current = current.right;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }
  // 3 没有右子树，同时是父节点的右节点，下节点是找到父父节点左节点，是祖先左节点的父节点，若没有返回null
  while (current.father !== null) {
    if (current === current.father.left) {
      return current.father;
    }
    current = current.father;
  }
  return null;
};
