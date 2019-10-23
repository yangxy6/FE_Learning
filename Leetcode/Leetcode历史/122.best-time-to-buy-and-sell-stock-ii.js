/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * √ 201/201 cases passed (52 ms)
 * √ Your runtime beats 94.42 % of javascript submissions
 * √ Your memory usage beats 41.38 % of javascript submissions (35.4 MB)
 * [122] Best Time to Buy and Sell Stock II
 */
/**
 * @param {number[]} prices
 * @return {number}
 * 思路：前一天prices[i]、后一天prices[i - 1]，两者差值>0时说明交易可以挣钱，可以卖出再买（本题可以当天买入和卖出，相当于没有收益），累加收益就是结果
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0;
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    let temp = prices[i] - prices[i - 1];
    if (temp > 0) {
      ans += temp;
    }
  }
  return ans;
};
console.log(maxProfit([2, 1, 4, 5, 2, 9, 7]));
