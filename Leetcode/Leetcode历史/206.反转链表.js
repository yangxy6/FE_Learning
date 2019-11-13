// 206. Reverse Linked List 反转链表
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
 * 迭代循环
 * 详解：分别使用三个指针,cur指向head,pre指向null,next指向cur.next保存原链表顺序
 * 核心：1->2时 先断开1->2的连接，将1指向pre,pre赋值cur,cur赋值next,实现2->1反转
 */
const reverseList = head => {
  let cur = head,
    pre = null;
  while (cur) {
    let next = cur.next; //保留cur.next
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre; //反转后的链表
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 递归
 * 详解：每次递归时打破head和head.next的指针连接，同时将head.next.next也就是下一节点的指向head
 */
const reverseList = head => {
  if (head === null || head.next === null) return head;
  let newHead = reverseList(head.next); // 将下一节点传到reverseList递归
  head.next.next = head; //head->1->2 1的指针由2指向head
  head.next = null; // head指针指向null，实现1->head反转
  return newHead;
};