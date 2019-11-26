/*
 * @lc app=leetcode.cn id=405 lang=javascript
 * 100/100 cases passed (60 ms)
 * Your runtime beats 88.89 % of javascript submissions
 * Your memory usage beats 9.09 % of javascript submissions (33.8 MB)
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 * 位运算
 * -1反码是1111 1111 反码加1  所以-1&15是15也就是f,15是ffff，整数&15=整数
 * >>>4 无符号右移四位
 */
var toHex = function(num) {
  const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  if (num === 0) return '0';
  let arr = [];
  while (num !== 0 && arr.length < 8) {
    arr.push(hex[num & 15]);
    num = num >>> 4;
  }
  return arr.reverse().join('');
};
console.log(toHex(-1));
// @lc code=end
