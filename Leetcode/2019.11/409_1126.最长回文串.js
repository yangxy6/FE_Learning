/*
 * @lc app=leetcode.cn id=409 lang=javascript
 * 95/95 cases passed (84 ms)
 * Your runtime beats 42.48 % of javascript submissions
 * Your memory usage beats 25.71 % of javascript submissions (36 MB)
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 *
 */
var longestPalindrome = function(s) {
  let obj = {};
  //统计字母出现的次数
  for (let i = 0; i < s.length; i++) {
    let letter = s.charAt(i);
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  let even = 0;
  let odd = false;
  // 区分奇数和偶数，偶数直接相加，奇数+奇数-1
  Object.keys(obj).map(item => {
    if (obj[item] % 2 === 0) {
      even += obj[item];
    } else {
      odd = true;
      even += obj[item] - 1;
    }
  });
  return odd ? even + 1 : even;
};
console.log(longestPalindrome('bb'));
// @lc code=end
