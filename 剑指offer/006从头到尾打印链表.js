/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {Number[]}
 * 思路：利用栈先入后出
 */
var printListReversingly = function(head) {
  let current = head;
  let stack = [];
  while (current !== null) {
    stack.push(current.val);
    current = current.next;
  }
  let ans = [];
  while (stack.length !== 0) {
    ans.push(stack.pop());
  }
  return ans;
};

/**
 * 思路：递归
 * 注意：当链表非常长时，递归调用层级很深，会出现调用栈溢出
 */
let ans = []
var printListReversingly = function(head) {
  let current = head;
  if (current !== null) {
    printListReversingly(current.next);
    ans.push(current.val);
  }
  return ans;
};
8