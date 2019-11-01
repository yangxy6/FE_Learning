function numberAddAsList(l1, l2) {
  let carry = 0;
  while (l1.next !== null && l2.next !== null) {
    let newVal = l1.val + l2.val + carry;
    console.log(newVal, l1.val, l2.val, carry);
    if (newVal >= 10) {
      carry = Math.floor(newVal / 10);
      l1.val = newVal % 10;
      console.log(l1.val)
    } else {
      carry = 0;
      l1.val = newVal;
      console.log(l1.val)
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  if (carry !== 0) {
    //最高位有进位
    l1.next = new ListNode(carry);
  }
  return l1;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}
let l1 = new ListNode(3);
l1.next = new ListNode(1);
l1.next.next = new ListNode(5);
let l2 = new ListNode(5);
l2.next = new ListNode(9);
l2.next.next = new ListNode(2);
console.log(numberAddAsList(l1, l2));
