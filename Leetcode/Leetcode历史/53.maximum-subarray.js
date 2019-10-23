/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 大佬精妙的算法
 */
var maxSubArray = function(nums) {
  let ans = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] > nums[i]) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    ans = Math.max(sum, ans);
  }
  return ans;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5]));
