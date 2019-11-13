// 21. Merge Two Sorted Lists 合并两个排序链表
// 思路：- 开始打算以l1为主，将比较项逐个加在l1中，这样指针操作很麻烦
//      - 创建新链表，通过每项比较将node加到新链表中，同时移动三个链表的指针
//       - 注意：1.while结束条件 l1&&l2,链表遍历节点时未遍历到节点处理->最大，直接加到新链表的最后
//              2.res为新链表，包含head
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