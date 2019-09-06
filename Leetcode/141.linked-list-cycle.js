/*
 * @lc app=leetcode id=141 lang=javascript
 * √ 17/17 cases passed (60 ms)
 * √ Your runtime beats 92.37 % of javascript submissions
 * √ Your memory usage beats 93.75 % of javascript submissions (36.4 MB)
 * [141] Linked List Cycle
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
 * @return {boolean}
 * 思路：快慢指针，有环时，两个指针必会相遇
 */
var hasCycle = function(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
