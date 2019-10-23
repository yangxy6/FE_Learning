/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let res = binsearchSquare(1, num , num);
  return res ** 2 === num;

  function binsearchSquare(first, end, target) {
    while (first < end) {
      let mid = Math.floor(first + (end - first) / 2);
      if (target > mid * mid) {
        first = mid + 1;
      } else {
        end = mid;
      }
    }
    return first;
  }
};
console.log(isPerfectSquare(1));
