/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * √ 44/44 cases passed (56 ms)
 * √ Your runtime beats 93.17  % of javascript submissions
 * √ Your memory usage beats 50 % of javascript submissions (38.2 MB)
 * [169] Majority Element
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 利用对象保存每个数组项和次数
 */
var majorityElement = function(nums) {
  let halfLen = Math.floor(nums.length / 2);
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (o in obj) {
    if (obj[o] > halfLen) {
      return o;
    }
  }
};

/**
 * √ 44/44 cases passed (60 ms)
 * √ Your runtime beats 81.84 % of javascript submissions
 * √ Your memory usage beats 57.14 % of javascript submissions (37.5 MB)
 * @param {*} nums
 * 思路：摩尔法 当item相同时count+1，不同时count-1，count=0时，item重新换个直到最后剩下item就是结果
 */
var majorityElement = function(nums) {
  let item = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      item = nums[i];
      count = 1;
    } else if (nums[i] === item) {
      count++;
    } else {
      count--;
    }
  }
  return item;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
