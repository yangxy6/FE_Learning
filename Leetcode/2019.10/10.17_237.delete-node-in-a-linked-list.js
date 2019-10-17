/*
 * @lc app=leetcode id=237 lang=javascript
 * 41/41 cases passed (76 ms)
 * Your runtime beats 9.02 % of javascript submissions
 * Your memory usage beats 16.67 % of javascript submissions (36 MB)
 * [237] Delete Node in a Linked List
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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 很简单的题目，描述复杂了，给定的就是要删除的节点
 * 思路：链表删除就是改变next指向，当前给定的就是删除节点，拿不到前一个节点，
 * 所以只能将下一节点值赋值给当前节点，然后改变node.next
 *  node = node.next; 是错误答案，因为只是修改node节点的指向，但是链表的指向没有改变（引用对象）
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
// @lc code=end
