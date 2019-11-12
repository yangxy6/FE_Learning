/*
 * @lc app=leetcode.cn id=551 lang=javascript
 * 113/113 cases passed (64 ms)
 * Your runtime beats 84.42 % of javascript submissions
 * Your memory usage beats 73.81 % of javascript submissions (33.7 MB)
 * [551] 学生出勤记录 I
 * 思路：审题不认真，不能超过一个A和两个连续LL
 * indexOf('LLL')这个思路很好
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let count = 0;
  for (let i = 0; i < s.length && count < 2; i++) {
    if (s.charAt(i) === 'A') count++;
  }
  return count < 2 && s.indexOf('LLL') < 0;
};
console.log(checkRecord('PPALLP'));
// @lc code=end
