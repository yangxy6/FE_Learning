/*
 * @lc app=leetcode id=217 lang=javascript
 * √ 18/18 cases passed (60 ms)
 * √ Your runtime beats 92.16 % of javascript submissions
 * √ Your memory usage beats 88.24 % of javascript submissions (40 MB)
 * [217] Contains Duplicate
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 * 思路：开始用obj对象存储，利用属性不相同，发现if判断0时是false，改用set存储数据
 */
var containsDuplicate = function(nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }
  return false;
};
console.log(containsDuplicate([0, 3, 4, 5, 0, 6]));
