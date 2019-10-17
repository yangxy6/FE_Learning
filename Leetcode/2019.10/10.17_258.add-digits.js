/*
 * @lc app=leetcode id=258 lang=javascript
 * [258] Add Digits
 */

// @lc code=start
/**
 *  1101/1101 cases passed (84 ms)
 * Your runtime beats 21.47 % of javascript submissions
 * Your memory usage beats 66.67 % of javascript submissions (36.2 MB)
 * @param {number} num
 * @return {number}
 * 思路：转字符串，相加
 */
var addDigits = function(num) {
  while (num > 9) {
    let numbers = num.toString().split('');
    num = 0;
    for (let i = 0; i < numbers.length; i++) {
      num += Number(numbers[i]);
    }
  }
  return num;
};
/**
 * 1101/1101 cases passed (68 ms)
 * Your runtime beats 88.4 % of javascript submissions
 * Your memory usage beats 66.67 % of javascript submissions (35.9 MB)
 * @param {*} num
 * 思路：数学归纳法
 * num的堆数 = num - 9的倍数 所以num%9就是结果
 */
const addDigits = function(num) {
  if (num > 9) {
    num = num % 9;
    if (num === 0) return 9;
  }
  return num;
};
console.log(addDigits(456));
// @lc code=end
