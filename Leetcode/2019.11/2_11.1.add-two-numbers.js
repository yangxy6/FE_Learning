/*
 * @lc app=leetcode id=2 lang=javascript
 * 1563/1563 cases passed (128 ms)
 * Your runtime beats 22.36 % of javascript submissions
 * Your memory usage beats 62.5 % of javascript submissions (38.4 MB)
 * [2] Add Two Numbers
 */

// @lc code=start
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
 * 坑：需要新建一个链表，不使用原来的链表
 */
var addTwoNumbers = function(l1, l2) {
  let pre = new ListNode(0); //新的链表
  let carry = 0;
  let cur = pre;
  while (l1 !== null || l2 !== null) {
    let x = l1 === null ? 0 : l1.val;
    let y = l2 === null ? 0 : l2.val;
    let newVal = x + y + carry;
    carry = Math.floor(newVal / 10);
    newVal = newVal % 10;
    cur.next = new ListNode(newVal);

    cur = cur.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry === 1) {
    //最高位有进位
    cur.next = new ListNode(carry);
  }
  return pre.next;
};

// @lc code=end
