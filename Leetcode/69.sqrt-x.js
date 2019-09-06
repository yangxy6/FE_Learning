/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let start = 1;
  let end = x;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (x > mid * mid) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return x === end ** 2 ? end : end - 1;
};
console.log(mySqrt(50));
