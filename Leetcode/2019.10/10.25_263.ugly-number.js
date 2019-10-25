/*
 * @lc app=leetcode id=263 lang=javascript
 * 1012/1012 cases passed (76 ms)
 * Your runtime beats 41.45 % of javascript submissions
 * Your memory usage beats 33.33 % of javascript submissions (35.6 MB)
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num === 0) return false;
  if (num === 1) return true;
  while (true) {
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 3 === 0) {
      num = num / 3;
    } else if (num % 5 === 0) {
      num = num / 5;
    } else {
      if (num === 1) return true;
      return false;
    }
  }
};
// console.log(isUgly(1));
// @lc code=end
