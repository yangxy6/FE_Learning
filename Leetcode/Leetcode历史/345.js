/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let str = s.split('');
    let left = 0;
    let right = str.length - 1;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    while (left < right) {
      if (vowels.indexOf(str[left]) === -1) {
        left++;
      }
      if (vowels.indexOf(str[right]) === -1) {
        right--;
      }
      if (vowels.indexOf(str[left]) !== -1 && vowels.indexOf(str[right]) !== -1) {
        [str[left], str[right]] = [str[right], str[left]];
        left++;
        right--;
      }
    }
    return str.join('');
  };
  console.log(reverseVowels('leetcode'));
  