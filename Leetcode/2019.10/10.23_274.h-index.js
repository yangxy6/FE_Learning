/*
 * @lc app=leetcode id=274 lang=javascript
 * 82/82 cases passed (64 ms)
 * Your runtime beats 46.96 % of javascript submissions
 * Your memory usage beats 100 % of javascript submissions (34.9 MB)
 * [274] H-Index
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 * 思路：倒序排序后，从前往后开始，直到某篇序号大于引用次数，序号减1即是H指数
 */
var hIndex = function(citations) {
  citations = citations.sort((a, b) => b - a);
  let Len = citations.length;
  for (let i = 0; i < Len; i++) {
    if (citations[i] <= i) return i;
  }
  return citations.length ? citations.length : 0;
};
console.log(hIndex([1, 2]));
// @lc code=end
