/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 */

// @lc code=start
/**
 * 72/72 cases passed (284 ms)
 * Your runtime beats 27.76 % of javascript submissions
 * Your memory usage beats 100 % of javascript submissions (37 MB)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) return 0;
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    let index = nums.indexOf(nums[i] - k);
    if (index !== -1 && index !== i) set.add(nums[i], nums[i] - k);
  }
  return set.size;
};
console.log(findPairs([1, 2, 3, 4, 5], 1));
// @lc code=end
