/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * √ Your runtime beats 72.43 % of javascript submissions
 * √ Your memory usage beats 33.7 % of javascript submissions (33.9 MB)
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 * 动态规划->从后往前思想
 * 动态规划，最优解转化为其子问题
 * 第i-1阶后向上爬一个，第i-2阶后向上爬两个，爬到第i个 dp[i]=dp[i-1]+dp[i-2]
 * 时间复杂度O(n)，空间复杂度O(n)
 */
var climbStairs = function(n) {
  if (n === 1) return 1;
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// /**
//  * @param {number} n
//  * @return {number}
//  * 典型的斐波那契数——递归（n过大时会超时）
//  */
var climbStairs = function(n) {
  // n===0不代表不走，而是走到后面正好剩一步
  if (n === 0) return 1;
  if (n === 1) return 1;
  if (n > 1) {
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
};

/**
 * √ 45/45 cases passed (48 ms)
 * √ Your runtime beats 89.65 % of javascript submissions
 * √ Your memory usage beats 58.01 % of javascript submissions (33.8 MB)
 * @param {number} n
 * @return {number}
 * 典型的斐波那契数——非递归
 * 这个想法很奇妙，一个循环一阶梯一阶梯往上走，没走一步记录方法，同时first，second重新赋值继续走。
 */
var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let first = 1;
  let second = 2;
  let third = 0;
  for (let i = 3; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }
  return third;
};
console.log(climbStairs(8));
