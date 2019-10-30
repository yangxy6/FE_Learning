/**
 * 前序遍历：递归
 * @param {*} root
 */
function preorderTraversalByRecursive(root) {
  let reuslt = [];
  helper(root);
  return reuslt;

  function helper(root) {
    if (root === null) return;
    reuslt.push(root.val);
    helper(root.left);
    helper(root.right);
  }
}

/**
 * 前序遍历——非递归（使用栈）
 * 将遍历的节点存入栈中，拿结果时从栈中取
 * @param {*} root
 */
function preorderTraversalByStack(root) {
  let result = [];
  let stack = [];
  stack.push(root); //压入root节点
  while (stack.length) {
    let node = stack.pop(); //弹出最后的节点，所以要先压入右子树
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
}

/**
 * 中序遍历——非递归
 * @param {*} root
 */
function inorderTraversalByStack(root) {
  let result = [];
  let stack = [];
  while (stack.length || root) {
    //stack在返回到根节点时长度是空，但是此时root有值
    //左子树最左节点取root.right是null，但是此时stack有长度
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      result.push(root.val);
      root = root.right; //左子树最左节点取root.right是null，会再次进入循环取双亲节点（同时有左右节点）
    }
  }
  return result;
}

/**
 * 非递归后序遍历——不是完全理解先m
 * @param {*} node
 */
var postOrderTraversal = function(node) {
  let result = [];
  if (node) {
    var stack = [];
    stack.push(node); //压入栈
    var tmp = null; //定义临时变量
    while (stack.length !== 0) {
      tmp = stack[stack.length - 1]; //栈顶元素保存在temp
      if (tmp.left && node !== tmp.left && node !== tmp.right) {
        stack.push(tmp.left);
      } else if (tmp.right && node !== tmp.right) {
        stack.push(tmp.right);
      } else {
        result.push(stack.pop().val);
        node = tmp; //？？？为了 node !== tmp.left && node !== tmp.right判断？
      }
    }
  }
  return result;
};

/**
 * 广度遍历（层级遍历）——递归（队列)
 * @param {*} root
 */
function levelOrderTraversal(root) {
  if (!root) return;
  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let node = queue.shift();
    result.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(28);
root.left = new TreeNode(16);
root.right = new TreeNode(30);
root.left.left = new TreeNode(13);
root.left.right = new TreeNode(22);
root.right.left = new TreeNode(29);
root.right.right = new TreeNode(43);
console.log(levelOrderTraversal(root));
