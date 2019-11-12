/**
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let p1 = l1; //l1
  let p2 = l2; //l2
  let head = new ListNode(-1); // 新链表的head
  let cur = head;
  let carried = 0; // 进位标志
  while (p1 || p2) {
    let a = p1 ? p1.val : 0; // 两个链表长度不对等时需要单出处理每一项
    let b = p2 ? p2.val : 0;
    cur.next = new ListNode((a + b + carried) % 10);
    carried = Math.floor((a + b + carried) / 10);

    cur = cur.next;
    p1 = p1 ? p1.next : null; //循环取两个链表的下一项，下一项可能为空
    p2 = p2 ? p2.next : null;
  }
  cur.next = carried ? new ListNode(1) : null; //循环结束最后一位大于10要进1
  return head.next;
};
