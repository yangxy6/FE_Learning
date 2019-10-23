/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 时间复杂度O(n)，空间复杂度O(1)
 * 思路：想法特别精妙，两个链表长度不一致，短+长拼接和长+短拼接，最后节点相等时不是相交节点就是（null===null）
 * 举栗子：[0,9,1,2,4]和[3,2,4] 两个链表拼接后[0,9,1,2,4,3,2,4]和[3,2,4,0,9,1,2,4]相交节点在2开始相同
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) return null;
  let curA = headA;
  let curB = headB;
  // curA===curB说明相交或者全部节点走完直接返回
  while (curA !== curB) {
    //A节点走完走B 实现A+B
    curA = curA === null ? headB : curA.next;
    curB = curB === null ? headA : curB.next;
  }
  return curA;
};
