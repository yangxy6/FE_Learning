/*
 * @lc app=leetcode id=509 lang=javascript
 * 31/31 cases passed (56 ms)
 * Your runtime beats 61.64 % of javascript submissions
 * Your memory usage beats 100 % of javascript submissions (33.7 MB)
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N <= 0) return 0;
  if (N < 2) return 1;
  let pre = 0,
    cur = 1;
  for (let i = 0; i < N - 1; i++) {
    let sum = pre + cur;
    pre = cur;
    cur = sum;
  }
  return cur;
};
// @lc code=end
