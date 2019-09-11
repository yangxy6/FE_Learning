// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let reverseList = function(head) {
  let cur = head;
  let pre = null;
  while (cur !== null) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};

let head = new ListNode(0);
let next1 = new ListNode(1);
let next2 = new ListNode(2);
let next3 = new ListNode(3);
head.next = next1;
next1.next = next2;
next2.next = next3;
console.log(head);
console.log(reverseList(head));
