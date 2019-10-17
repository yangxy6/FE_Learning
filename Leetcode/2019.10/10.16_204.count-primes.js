/*
 * @lc app=leetcode id=204 lang=javascript
 * 20/20 cases passed (760 ms)
 * Your runtime beats 19.31 % of javascript submissions
 * Your memory usage beats 93.33 % of javascript submissions (34.3 MB)
 * [204] Count Primes
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) { 
  if (n <= 1) return 0;
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (isPrimes(i)) {
      count++;
    }
  }
  // 判断是否是质数
  function isPrimes(number) {
    if (number === 1) return false;
    for (let j = 2; j <= Math.sqrt(number); j++) {
      if (number % j === 0) return false;
    }
    return true;
  }
  return count;
};

// @lc code=end
