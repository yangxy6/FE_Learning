/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * 8/8 cases passed (64 ms)
 * Your runtime beats 58.74 % of javascript submissions
 * Your memory usage beats 25 % of javascript submissions (37.5 MB)
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let str = '';
    if (i % 15 === 0) {
      str = 'FizzBuzz';
    } else if (i % 5 === 0) {
      str = 'Buzz';
    } else if (i % 3 === 0) {
      str = 'Fizz';
    } else {
      str = i.toString();
    }
    arr.push(str);
  }
  return arr;
};
// console.log(fizzBuzz(15));
// @lc code=end
