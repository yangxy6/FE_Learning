/**
 *
 * @param {*} num
 * @param {*} k
 * 思路：如果有高位数值大于后一位的删除高位，没有就按k个数删除倒数几位
 */
function removeDigits(num, k) {
  let stack = [];
  for (let i = 0; i < num.length; i++) {
    // 如果1.右侧值<左侧值->左侧值出栈，右侧进栈，k--2.k>0
    stack.push(num[i]);
    if (num[i + 1] < num[i] && k > 0) {
      stack.pop();
      k--;
    }
  }
  // 如果没有右侧大于左侧的，那在最后一次删除倒数k项
  if (k > 0) {
    for (let i = 0; i < k; i++) {
      stack.pop();
    }
  }
  return stack;
}
console.log(removeDigits('541270936', 3));
