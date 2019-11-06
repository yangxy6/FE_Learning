/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * 600/600 cases passed (56 ms)
 * Your runtime beats 98.77 % of javascript submissions
 * Your memory usage beats 83.33 % of javascript submissions (35.8 MB)
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * 每当末位 &1 的结果为 1，说明末位为1，此时将待输出的目标整数左移动一位并加上1；
 * 每当末位 &1 的结果为0，说明末位为0，此时将待输出的目标整数左移一位即可；
 */
var reverseBits = function(n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res <<= 1; // res结果左移空出一位
    res |= n & 1; //n&1获取n的末位，res的末位换成n的末位
    n >>= 1; //n右移1位，n从左往右移动，res从右往左移动，形成倒序
  }
  return res >>> 0;//>>>0无符号右移保证是正数，参数文章[js中表达式 >>> 0 浅析](https://segmentfault.com/a/1190000014613703?utm_source=tag-newest)
};

console.log(reverseBits(11111111111111111111111111111101));
console.log(reverseBits(00000010100101000001111010011100)); //18不是很理解18怎么得出来的
// @lc code=end
