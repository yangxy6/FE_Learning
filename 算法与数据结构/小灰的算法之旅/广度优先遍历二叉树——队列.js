/**
 * 层序遍历
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function levelOrderTraversalWithQueue(root) {
  let queue = [];
  let current = root;
  let ans = [];
  queue.push(current);
  while (queue.length !== 0) {
    let node = queue.shift();
    ans.push(node.val);
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
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

console.log(levelOrderTraversalWithQueue(tree));
