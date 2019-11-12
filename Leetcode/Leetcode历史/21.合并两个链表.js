/**
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
var mergeTwoLists = function(l1, l2) {
  const res = new ListNode();
  let newCurrent = res;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      newCurrent.next = new ListNode(l1.val);
      l1 = l1.next;
      newCurrent = newCurrent.next;
    } else {
      newCurrent.next = new ListNode(l2.val);
      l2 = l2.next;
      newCurrent = newCurrent.next;
    }
  }
  newCurrent.next = l1 || l2; // while循环时l1,l2会有一个链表先走到尾巴，结束循环，此时未结束循环的剩余项需要加到新链表的末尾
  return res.next; // 不需要打印head项，从next开始
};
