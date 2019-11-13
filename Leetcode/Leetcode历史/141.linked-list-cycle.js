/*
 * @lc app=leetcode id=141 lang=javascript
 *
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
 */
var hasCycle = function(head) {
  let slow = head,
    fast = head;
  while (fast) {
    if (!fast.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
