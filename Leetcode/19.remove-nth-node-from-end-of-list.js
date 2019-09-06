/*
 * @lc app=leetcode id=19 lang=javascript
 * √ 208/208 cases passed (60 ms)
 * √ Your runtime beats 58.47 % of javascript submissions
 * √ Your memory usage beats 22.73 % of javascript submissions (34.2 MB)
 * [19] Remove Nth Node From End of List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 思路：快慢指针，其中快指针先走n步，然后快慢指针一起走，当快指针的下一个null时，慢指针下一个是要删除的对象。
 */
var removeNthFromEnd = function(head, n) {
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  // fast指针已经先走了n步
  // fast===null说明删除正好是链表个数，也就是要删除第一个节点
  if (fast === null) {
    return head.next;
  }
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};
