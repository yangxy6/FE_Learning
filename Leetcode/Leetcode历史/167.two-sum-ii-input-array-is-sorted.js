/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 双指针移动
 * 当总和大于target，right指针向前移动
 * 当总和小于target，left指针向后移动
 * 时间复杂度O(n)
 */
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum > target) {
      right--;
    }
    if (sum < target) {
      left++;
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
