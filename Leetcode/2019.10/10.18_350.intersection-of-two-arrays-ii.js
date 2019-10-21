/*
 * @lc app=leetcode id=350 lang=javascript
 * 61/61 cases passed (56 ms)
 * Your runtime beats 84.94 % of javascript submissions
 * Your memory usage beats 88.89 % of javascript submissions (34.2 MB)
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let result = [];
  nums1.forEach(item => {
    if (nums2.includes(item)) {
      let index = nums2.indexOf(item);
      nums2.splice(index, 1);
      result.push(item);
    }
  });
  return result;
};
console.log(intersect([1, 2, 2, 1], [2, 2]));
// @lc code=end
