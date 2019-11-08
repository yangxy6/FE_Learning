/*
 * @lc app=leetcode id=260 lang=javascript
 * 30/30 cases passed (76 ms)
 * Your runtime beats 28.9 % of javascript submissions
 * Your memory usage beats 66.67 % of javascript submissions (35.6 MB)
 * [260] Single Number III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * 思路：位操作，分治，分治的依据是不同位
 */
var singleNumber = function(nums) {
  let res = [];
  let resultBit = 0;
  for (let i = 0; i < nums.length; i++) {
    resultBit ^= nums[i]; //获取两个奇数次的异或
  }
  let speartor = 1; // 用1来确定哪个位有区别，会移动到区别位
  while ((resultBit & speartor) === 0) {
    //确定哪个位置这两个正数有差异，resultBit是110，说明倒数第二位1
    // 两个数就是一个这位置是1一个是0&后才能是1，根据这不同位分治
    speartor <<= 1;
  }
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & speartor) === 0) {
      res[0] ^= nums[i];
    } else {
      res[1] ^= nums[i];
    }
  }
  return res;
};
console.log(singleNumber([1, 2, 1, 3, 2, 5]));
// @lc code=end
