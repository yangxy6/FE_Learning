/*
 * @lc app=leetcode id=744 lang=javascript
 *
 * [744] Find Smallest Letter Greater Than Target
 */
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 * 字符比较是keycode大小
 */
var nextGreatestLetter = function(letters, target) {
  let max = letters.length;
  // 边界-输入最后一位时输出第一位
  if (target >= letters[max - 1]) {
    return letters[0];
  }
  let last = binsearchLetter(letters, 0, max - 1, target);
  return letters[last];
  function binsearchLetter(array, first, end, target) {
    while (first < end) {
      let mid = Math.floor(first + (end - first) / 2);
      if (target < array[mid]) {
        end = mid;
      } else {
        first = mid + 1;
      }
    }
    return end;
  }
};
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
