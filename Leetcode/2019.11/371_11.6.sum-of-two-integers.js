/*
 * @lc app=leetcode id=371 lang=javascript
 * 13/13 cases passed (48 ms)
 * Your runtime beats 88.02 % of javascript submissions
 * Your memory usage beats 80 % of javascript submissions (33.8 MB)
 * [371] Sum of Two Integers
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * 位操作
 */
var getSum = function(a, b) {
  while (b !== 0) {
    // 直到b=0，没有需要进位的了
    let temp = (a & b) << 1; //a&b 获取进位，同时左移1位
    a = a ^ b; // a^b无进位加法
    b = temp;
  }
  return a;
};

console.log(getSum(-1, 3));
// @lc code=end
