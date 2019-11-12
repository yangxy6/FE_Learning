/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}

 */
const reverseList = head => {
  let cur = head,
    pre = null;
  while (cur) {
    let next = cur.next; //保留cur.next
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre; //反转后的链表
};
