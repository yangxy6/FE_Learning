/*
 * @lc app=leetcode id=349 lang=javascript
 * 60/60 cases passed (60 ms)
 * Your runtime beats 55.68 % of javascript submissions
 * Your memory usage beats 46.15 % of javascript submissions (34.4 MB)
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 思路：set去重，has判断
 */
// var intersection = function(nums1, nums2) {
//   let result = [];
//   let set1 = new Set(nums1);
//   let set2 = new Set(nums2);
//   set1.forEach(item => {
//     if (set2.has(item)) {
//       result.push(item);
//     }
//   });
//   return result;
// };

/**
 * 60/60 cases passed (56 ms)
 * Your runtime beats 78.58 % of javascript submissions
 * Your memory usage beats 92.31 % of javascript submissions (34.1 MB)
 * @param {*} nums1 
 * @param {*} nums2 
 */
const intersection = function(nums1, nums2) {
  return [...new Set(nums1.filter(v => nums2.includes(v)))];
};
console.log(intersection([4, 7, 23, 6, 74, 48, 7, 2, 9, 59, 37, 3], [4, 7, 2, 7, 9, 36, 25, 7, 2, 74, 3]));
// @lc code=end
