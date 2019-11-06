/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */
/**
 * √ 16/16 cases passed (116 ms)
 * √ Your runtime beats 16.91 % of javascript submissions
 * √ Your memory usage beats 7.76 % of javascript submissions (39.2 MB)
 * @param {number[]} nums
 * @return {number}
 *  思路：先排序在比较前一位和后一位，相同在splice掉，符合题意，就是运行太慢
 */
var singleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 2);
      i = i - 2;
    }
  }
  return nums.join();
};

/**
 * √ 16/16 cases passed (56 ms)
 * √ Your runtime beats 86.11 % of javascript submissions
 * √ Your memory usage beats 75 % of javascript submissions (35.5 MB)
 * @param {*} nums
 * 思路：异或操作，规律：1、 x ^ 0 = x。2、 x ^ -1 = -x 3、X ^ X = 0
 */
var singleNumber = function(nums) {
  let ans;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i]; // 异或操作与顺序没有关系a^b^c与c^b^a一样，其中a^a=0两个相同值没有互异的点位
  }
  return ans;
};
console.log(singleNumber([2, 2, 1]));
