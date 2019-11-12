function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 思路：前序遍历确定根节点，中序遍历确定左右子树
 */
function reConstructBinaryTree(preOrder, InOrder) {
  if (preOrder.length === 0 || InOrder.length === 0) return null;
  //找到根节点，前序遍历第一个节点
  let root = preOrder[0];
  let index = InOrder.indexOf(root);
  //在中序遍历上根据根节点找到左右子树
  let InorderLeft = InOrder.slice(0, index + 1); //左子树中序遍历
  let InorderRight = InOrder.slice(index + 1); //右子树中序遍历
  //构建树
  let tree = new TreeNode(root);
  //分别递归左右子树->找到子根节点->找到左右子子树
  //传参还是前序遍历和中序遍历
  let preOrderLeft = preOrder.slice(1, index + 1); // 左子树前序遍历
  let preOrderRight = preOrder.slice(index + 1); // 右子树前序遍历
  tree.left = reConstructBinaryTree(preOrderLeft, InorderLeft);
  tree.right = reConstructBinaryTree(preOrderRight, InorderRight);
  return tree;
}
console.log(reConstructBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6]));
