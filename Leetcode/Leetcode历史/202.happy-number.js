/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let set = new Set();
  while (true) {
    n = Math.pow(Math.floor(n % 10), 2) + Math.pow(Math.floor(n / 10), 2);
    console.log(n)
    if (set.has(n)) {
      return false;
    } else {
      set.add(n);
    }
  }
  return true;
};
console.log(isHappy(19));
