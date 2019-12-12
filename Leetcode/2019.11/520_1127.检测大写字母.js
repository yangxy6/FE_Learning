/*
 * @lc app=leetcode.cn id=520 lang=javascript
 * 550/550 cases passed (76 ms)
 * Your runtime beats 66.67 % of javascript submissions
 * Your memory usage beats 48 % of javascript submissions (34 MB)
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 * 思路:全大写或者全小写->true，除首位出现大写->false
 *
 * 还可以正则
 */
var detectCapitalUse = function(word) {
  let flag = true;
  if (word === word.toLowerCase() || word === word.toUpperCase()) return true;
  for (let i = 1; i < word.length; i++) {
    if (word.charAt(i) !== word.charAt(i).toLowerCase()) {
      return false;
    }
  }
  return true;
};
// console.log(detectCapitalUse('Google'));
// @lc code=end
