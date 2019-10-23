/*
 * @lc app=leetcode id=121 lang=javascript
 * √ 200/200 cases passed (60 ms)
 * √ Your runtime beats 70.93 % of javascript submissions
 * √ Your memory usage beats 21.78 % of javascript submissions (35.9 MB)
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 * 思路：循环中找到最小的，同时循环中找到Math.max(ans, prices[i] - min)最大差距
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0;
  let min = prices[0];
  let ans = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] > min) {
      ans = Math.max(ans, prices[i] - min);
    }
  }
  return ans;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
