/*
 * @lc app=leetcode id=724 lang=javascript
 * 741/741 cases passed (92 ms)
 * Your runtime beats 28.6 % of javascript submissions
 * Your memory usage beats 87.5 % of javascript submissions (37.9 MB)
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 思路：一个从0开始相加，一个从总和开始减，关键是错位相加
 */
var pivotIndex = function(nums) {
  if (nums.length === 0) return -1;
  let count = 0;
  let sum = nums.reduce((a, b) => a + b);
  for (let i = 0; i < nums.length; i++) {
    if (!nums[i - 1]) nums[i - 1] = 0;
    count += nums[i - 1];
    sum -= nums[i];
    if (count === sum) return i;
  }
  return -1;
};
console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));
// @lc code=end
