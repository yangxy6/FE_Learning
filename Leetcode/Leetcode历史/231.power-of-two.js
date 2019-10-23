/*
 * @lc app=leetcode id=231 lang=javascript
 *  √ 1108/1108 cases passed (88 ms)
 * √ Your runtime beats 13.35 % of javascript submissions
 * √ Your memory usage beats 23.08 % of javascript submissions (35.6 MB)
 * [231] Power of Two
 */
/**
 * @param {number} n
 * @return {boolean}
 * 思路：无线循环n=n/2
 */
// var isPowerOfTwo = function(n) {
//   if (n <= 0) return false;
//   if (n === 1) return true;
//   while (n !== 1 && n !== -1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// };
// console.log(isPowerOfTwo(-16));

/**
 * √ 1108/1108 cases passed (64 ms)
 * √ Your runtime beats 92.78 % of javascript submissions
 * √ Your memory usage beats 46.15 % of javascript submissions (35.6 MB)
 * 题解中get到二进制法，真是厉害了
 * 二进制法，二进制中只有最高位是1，其他位置都是0，n位置是1，n-1位置是0，判断n&(n-1)===0即是2的幂
 * @param {*} n
 */
const isPowerOfTwo = function(n) {
  return n > 0 && (n & (n - 1)) === 0;
};
console.log(isPowerOfTwo(16));
