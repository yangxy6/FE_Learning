/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * 27/27 cases passed (60 ms)
 * Your runtime beats 57.16 % of javascript submissions
 * Your memory usage beats 76.09 % of javascript submissions (34.9 MB)
 * @param {ListNode} head
 * @return {ListNode}
 * 迭代+头插法
 * https://www.cxyxiaowu.com/1400.html 吴师兄
 * 思路：设置三个节点pre、cur、next
 *（1）每次查看cur节点是否为NULL，如果是，则结束循环，获得结果
 *（2）如果cur节点不是为NULL，则先设置临时变量next为cur的下一个节点
 *（3）让cur的下一个节点变成指向pre，而后pre移动cur，cur移动到next
 *（4）重复（1）（2）（3）
 */
var reverseList = function(head) {
  let cur = head;
  let pre = null;
  while (cur !== null) {
    let next = cur.next; //后面cur.next会赋值所以next保存起来
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

/**
 * 27/27 cases passed (64 ms)
 * Your runtime beats 30.15 % of javascript submissions
 * Your memory usage beats 28.26 % of javascript submissions (35.4 MB)
 * 递归
 * 1->2->3->4 递归到倒数第二个节点后开始修改指针
 */
var reverseList = function(head) {
  //结束递归，返回链表
  if (head === null || head.next === null) return head;
  let lastHead = reverseList(head.next);

  head.next.next = head; //3->4 3节点的下一节点4的next指针指向3，同时3的next指向空
  head.next = null;

  return lastHead; // 返回reverseList(head.next)
};
// @lc code=end
