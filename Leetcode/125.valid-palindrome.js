/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * √ 476/476 cases passed (88 ms)
 * √ Your runtime beats 19.45 % of javascript submissions
 * √ Your memory usage beats 44.83 % of javascript submissions (38.4 MB)
 * [125] Valid Palindrome
 */
/**
 * @param {string} s
 * @return {boolean}
 * 思路：正则匹配，然后验证回文串
 */
var isPalindrome = function(s) {
  if (s === '') return true;
  let reg = /[^A-Za-z0-9]/g; // ^表示匹配除了中括号外的字符
  s = s.replace(reg, '').toLowerCase();
  return (
    s ===
    s
      .split('')
      .reverse()
      .join('')
  );
};

/**
 * √ 476/476 cases passed (64 ms)
 * √ Your runtime beats 91.18 % of javascript submissions
 * √ Your memory usage beats 75.86 % of javascript submissions (37.1 MB)
 * @param {string} s
 * 思路：双指针，一个从左边开始，一个从右边开始，进行字符串比较
 * 时间复杂度：O(n)
 */
var isPalindrome = function(s) {
  if (s === '') return true;
  let reg = /[^A-Za-z0-9]/g; // ^表示匹配除了中括号外的字符
  s = s.replace(reg, '').toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));
