/**
 * 大整数相加
 * @param {*} num1
 * @param {*} num2
 * @return num
 * 思路：大整数超过安全数，用数组按位相加，类似竖式加法
 */
function bigNumberSum(num1, num2) {
  let arr1 = num1
    .split('')
    .reverse()
    .map(item => Number(item));
  let arr2 = num2
    .split('')
    .reverse()
    .map(item => Number(item));
  let Len = arr1.length > arr2.length ? arr1.length : arr2.length;
  let ans = [];
  for (let i = 0; i < Len; i++) {
    if (arr1[i] && arr2[i]) {
      let temp = arr1[i] + arr2[i];
      if (ans[i]) {
        temp += ans[i];
      }
      if (temp >= 10) {
        temp = temp - 10;
        ans[i] = temp;
        ans[i + 1] = 1;
      }
      ans[i] = temp;
    } else {
      let temp = arr1[i] || arr2[i];
      if (ans[i]) {
        ans[i] = temp + ans[i];
      }
    }
  }
  return ans.reverse().join('');
}
console.log(bigNumberSum('4557535879425', '736984268349'));
