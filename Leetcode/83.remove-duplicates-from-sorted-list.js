/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * √ 165/165 cases passed (76 ms)
 * √ Your runtime beats 22.4 % of javascript submissions
 * √ Your memory usage beats 73.83 % of javascript submissions (35.6 MB)
 * [83] Remove Duplicates from Sorted List
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
 * @return {ListNode}
 * 开始打算用obj去重，发现实际是已经排序的链表直接通过current.next.val和curren.val进行比较
 */
var deleteDuplicates = function(head) {
  let current = head;
  while (current !== null && current.next !== null) {
    if (current.next.val === current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
