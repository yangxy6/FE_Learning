/*
 * @lc app=leetcode id=206 lang=javascript
 * √ 27/27 cases passed (60 ms)
 * √ Your runtime beats 55.89 % of javascript submissions
 * √ Your memory usage beats 65.22 % of javascript submissions (35 MB)
 *
 * [206] Reverse Linked List
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
 */
let reverseList = function(head) {
  let cur = head;
  let pre = null;
  while (cur !== null) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};
