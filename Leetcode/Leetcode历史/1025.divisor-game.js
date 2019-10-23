/*
 * @lc app=leetcode id=1025 lang=javascript
 * √ 40/40 cases passed (68 ms)
 * √ Your runtime beats 14.61 % of javascript submissions
 * √ Your memory usage beats 20 % of javascript submissions (34.2 MB)
 * [1025] Divisor Game
 */
/**
 * @param {number} N
 * @return {boolean}
 */
let obj = {};
var divisorGame = function(N) {
  if (N <= 1) return false;
  if (obj[N]) return obj[N];
  let res = false;
  for (let i = 1; i < N; i++) {
    if (N % i === 0 && !divisorGame(N - i)) {
      res = true;
      break;
    }
  }
  obj[N] = res;
  return res;
};

console.log(divisorGame(196));
