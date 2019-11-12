/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      if (s[left] !== s[right]) {
        [s[left], s[right]] = [s[right], s[left]];
      }
      left++;
      right--;
    }
    return s;
  };
  console.log(reverseString(['h', 'e', 'l', 'l', '0']));