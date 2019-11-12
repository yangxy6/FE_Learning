/**
 * 二叉树非递归前序遍历——栈
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function preOrderTraverWithStack(root) {
  let stack = [];
  let current = root;
  let ans = [];
  while (current !== null || stack.length !== 0) {
    // 访问左节点，并入栈
    while (current !== null) {
      ans.push(current.val);
      stack.push(current);
      current = current.left;
    }
    // 没有左节点后，弹出栈顶节点（回溯），访问右节点
    if (stack.length !== 0) {
      current = stack.pop(); // 回溯拿到父节点
      current = current.right;
    }
  }
  return ans;
}
let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = null;
tree.right.right = new TreeNode(6);

console.log(preOrderTraverWithStack(tree));
