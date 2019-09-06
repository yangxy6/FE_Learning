/*
 * @lc app=leetcode id=24 lang=javascript
 * √ 55/55 cases passed (56 ms)
 * √ Your runtime beats 53.07 % of javascript submissions
 * √ Your memory usage beats 68.42 % of javascript submissions (33.8 MB)
 * [24] Swap Nodes in Pairs
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
 * 思路：先建一个空节点dummy指向head节点，之后所有都依赖Thead节点
 * Thead->a->b->c变成Thead->b a->b.next b->a
 */
var swapPairs = function(head) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let Thead = dummy;
  while (Thead.next !== null && Thead.next.next !== null) {
    let a = Thead.next;
    let b = Thead.next.next;
    Thead.next = b;
    a.next = b.next;
    b.next = a;
    Thead = a;
  }
  return dummy.next;
};
