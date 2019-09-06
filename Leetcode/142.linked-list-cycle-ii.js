/*
 * @lc app=leetcode id=142 lang=javascript
 * √ 16/16 cases passed (68 ms)
 * √ Your runtime beats 60.25 % of javascript submissions
 * √ Your memory usage beats 93.75 % of javascript submissions (36.3 MB)
 * [142] Linked List Cycle II
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
 * 思路：快慢指针，第一次相遇后，slow指针回到head，slow和fast节点同时走一步，必然会在入环口相遇
 * 注意：如果是从0开始有环，第一次相遇就在入环口
 */

var detectCycle = function(head) {
  let slow = head;
  let fast = head;
  let count = 0;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  while (slow !== null) {
    slow = slow.next;
    count++;
    if (slow === fast) {
      return count;
    }
  }
  return count;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * 求环长
 * @param {*} head
 * 思路：快慢指针，第一次相遇后，slow指针继续走，fast不动，再次相遇时，slow走过距离就是环长
 */
var detectCycle = function(head) {
  let slow = head;
  let fast = head;
  let count = 0;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  while (slow !== null) {
    slow = slow.next;
    count++;
    if (slow === fast) {
      return count;
    }
  }
  return count;
};
let l1 = new ListNode(3);
let l2 = new ListNode(4);
let l3 = new ListNode(5);
let l4 = new ListNode(6);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l2;
console.log(detectCycle(l1));
