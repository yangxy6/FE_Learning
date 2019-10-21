/*
 * @lc app=leetcode id=383 lang=javascript
 * 126/126 cases passed (88 ms)
 * Your runtime beats 42.9 % of javascript submissions
 * Your memory usage beats 33.33 % of javascript submissions (38.5 MB)
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  for (let i = 0; i < magazine.length; i++) {
    if (ransomNote.includes(magazine[i])) {
      ransomNote = ransomNote.replace(magazine[i], '');
    }
  }
  return ransomNote.length === 0;
};
console.log(canConstruct('aa', 'aab'));


// @lc code=end
