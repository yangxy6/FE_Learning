/*
 * @lc app=leetcode id=275 lang=javascript
 *
 * [275] H-Index II
 */

// @lc code=start
/**
 * 84/84 cases passed (56 ms)
 * Your runtime beats 73.5 % of javascript submissions
 * Your memory usage beats 100 % of javascript submissions (38 MB)
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let Len = citations.length;
  for (let i = 0; i < Len; i++) {
    if (citations[i] >= Len - i) return Len - i;
  }
  return 0;
};

/**
 * 二分
 * 84/84 cases passed (68 ms)
 * Your runtime beats 18.8 % of javascript submissions
 * Your memory usage beats 100 % of javascript submissions (37.1 MB)
 * @param {*} citations
 */
var hIndex = function(citations) {
  let Len = citations.length;
  let left = 0;
  let right = Len - 1;
  if (Len === 0 || citations[Len - 1] === 0) return 0;
  while (left < right) {
    let mid = (left + right) >>> 1;
    if (citations[mid] < Len - mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return Len - left; // left和right同值
};

console.log(hIndex([0, 1, 3, 5, 6]));
// @lc code=end
