/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
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
 * 1563/1563 cases passed (112 ms)
 * Your runtime beats 79.96 % of javascript submissions
 * Your memory usage beats 33.33 % of javascript submissions (39.4 MB)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 双栈+两数相加+数组reverse
 */
// var addTwoNumbers = function(l1, l2) {
//   let s1 = [],
//     s2 = [];
//   while (l1 !== null) {
//     s1.push(l1.val);
//     l1 = l1.next;
//   }
//   while (l2 !== null) {
//     s2.push(l2.val);
//     l2 = l2.next;
//   }
//   let carry = 0;
//   let arr = [];
//   while (s1.length > 0 || s2.length > 0) {
//     let x = s1.length > 0 ? s1.pop() : 0;
//     let y = s2.length > 0 ? s2.pop() : 0;
//     let newVal = x + y + carry;
//     carry = Math.floor(newVal / 10);
//     newVal = newVal % 10;
//     arr.push(newVal);
//   }
//   if (carry > 0) {
//     arr.push(1);
//   }
//   arr = arr.reverse();
//   let pre = new ListNode(0);
//   let cur = pre;
//   for (let i = 0; i < arr.length; i++) {
//     cur.next = new ListNode(arr[i]);
//     cur = cur.next;
//   }
//   return pre.next;
// };

/**
 * 1563/1563 cases passed (100 ms)
 * Your runtime beats 98.33 % of javascript submissions
 * Your memory usage beats 33.33 % of javascript submissions (38.6 MB)
 * @param {*} l1
 * @param {*} l2
 * 头插法
 */
var addTwoNumbers = function(l1, l2) {
  let s1 = [],
    s2 = [];
  while (l1 !== null) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    s2.push(l2.val);
    l2 = l2.next;
  }

  let carry = 0;
  let pre = new ListNode(0);

  while (s1.length > 0 || s2.length > 0 || carry) {
    let x = s1.length > 0 ? s1.pop() : 0;
    let y = s2.length > 0 ? s2.pop() : 0;
    let newVal = x + y + carry;
    carry = Math.floor(newVal / 10);
    newVal = newVal % 10;

    //头插法，反向链表
    let temp = new ListNode(newVal);
    temp.next = pre.next;
    pre.next = temp;
  }

  return pre.next;
};
// @lc code=end
