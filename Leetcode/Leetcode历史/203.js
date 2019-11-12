// 203. Remove Linked List Elements 删除链表元素
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let current = head,
      pre = null;
    while (current) {
      if (current.val === val) {
        if (pre) {
          // 非head项，pre直接指向current.next节点，忽略current节点
          pre.next = current.next;
        } else {
          //pre=null时，说明在链表第一项发现被删除的node,直接head=current.next忽略current节点
          head = current.next;
        }
      } else {
        // 值不等时pre=current，移动pre指针控制链表循环
        pre = current;
      }
      current = current.next;
    }
    return head;
  };