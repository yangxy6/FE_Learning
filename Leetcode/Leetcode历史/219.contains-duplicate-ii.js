/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let left = 0;
  let right = 1;
  while (left < right) {
    // if (nums[left] === nums[left + k]) {
    //   return true;
    // } else {
    //   left++;
    // }
    if (nums[left] === nums[right]) {
      console.log(left, right);
      if (Math.abs(right - left) < k) {
        return true;
      } else {
        right = left - 1;
        left++;
      }
    }
    right++;
  }
  return false;
};
console.log(containsNearbyDuplicate([0, 1, 2, 3, 2, 5], 3));
