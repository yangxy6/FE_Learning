/**
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 不能额外拷贝数组，必须在原数组上操作
 */
function moveZero(arr) {
  let slow = 0;
  let fast = 0;
  while (fast < arr.length) {
    if (arr[slow] !== 0) {
      slow++;
    } else if (arr[fast] !== 0) {
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
      slow++;
    }
    fast++;
  }
}
function moveZero(arr) {
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
}
moveZero([0, 1, 0, 0, 3, 12]);
