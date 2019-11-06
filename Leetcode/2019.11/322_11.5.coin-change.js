/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {
//   if (amount === 0) return 0;
//   let ans = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < coins.length; i++) {
//     if (amount - coins[i] < 0) continue;
//     let sub = coinChange(coins, amount - coins[i]);
//     if (sub === -1) continue;
//     ans = Math.min(ans, sub + 1);
//     console.log(ans, sub);
//   }
//   return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
// };


/**
 * 动态规划
 * 182/182 cases passed (92 ms)
 * Your runtime beats 71.26 % of javascript submissions
 * Your memory usage beats 27.27 % of javascript submissions (37.4 MB)
 * @param {*} coins 
 * @param {*} amount 
 */
const coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
    }
  }
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};

/**
 * [186,419,83,408],6249 测试案例未通过
 * 思路是重复减去最大的然后依次减，可能会出现amount组合中不需要大点的coin
 * @param {*} coins
 * @param {*} amount
 */
// const coinChange = function(coins, amount) {
//   let ans = 0;
//   coins = coins.sort((a, b) => a - b);
//   for (let i = coins.length - 1; i >= 0; i--) {
//     while (amount > 0) {
//       ans++;
//       amount = amount - coins[i];
//     }
//     if (amount !== 0) {
//       ans--;
//       amount += coins[i];
//     }
//   }
//   return amount === 0 ? ans : -1;
// };

console.log(coinChange([1, 2, 5], 11)); //3
console.log(coinChange([2, 5, 10, 1], 27)); //4
console.log(coinChange([2], 3)); //-1
console.log(coinChange([186, 419, 83, 408], 6249)); //20
// @lc code=end
