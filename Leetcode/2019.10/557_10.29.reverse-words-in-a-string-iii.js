/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * 30/30 cases passed (92 ms)
 * Your runtime beats 14.32 % of javascript submissions
 * Your memory usage beats 34.78 % of javascript submissions (42.2 MB)
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]
      .split('')
      .reverse()
      .join('');
  }
  return arr.join(' ');
};

/**
 * 30/30 cases passed (80 ms)
 * Your runtime beats 50.21 % of javascript submissions
 * Your memory usage beats 100 % of javascript submissions (41 MB)
 */
var reverseWords = function(s) {
  return s
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .reverse()
    .join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));
// @lc code=end
