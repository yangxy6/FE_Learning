/*
 * @lc app=leetcode id=1137 lang=javascript
 * √ 39/39 cases passed (52 ms)
 * √ Your runtime beats 66.49 % of javascript submissions
 * √ Your memory usage beats 100 % of javascript submissions (33.8 MB)
 * [1137] N-th Tribonacci Number
 */
/**
 * @param {number} n
 * @return {number}
 * 思路：利用array，while循环出每个T项放入数组中
 */
var tribonacci = function(n) {
  let arr = [0, 1, 1];
  if (n < 3) return arr[n];
  let i = 3;
  while (n >= i) {
    arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
    i++;
  }
  return arr[n];
};
console.log(tribonacci(25));
