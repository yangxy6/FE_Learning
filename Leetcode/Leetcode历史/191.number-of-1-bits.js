/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 * 思路：利用位操作，设置掩码mask=1，n&mask时n与mask相同位置都是1时，返回1，(n&mask)!==0说明n在同位置是1，之后mask<<一个位置，判断下一个位置。
 */
var hammingWeight = function(n) {
  let count = 0;
  let mask = 1;
  for (let i = 0; i < 32; i++) {
    if ((n & mask) !== 0) {
      count++;
    }
    mask <<= 1;
  }
  return count;
};
console.log(hammingWeight(00000000000000000000000000001011));
