/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * 方法一
 * 59/59 cases passed (64 ms)
 * Your runtime beats 23.89 % of javascript submissions
 * Your memory usage beats 7.69 % of javascript submissions (35.9 MB)
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead. 需要原地修改
 * ⚠️坑：注意其中的in-place，OJ不看return，只看nums1，这说明要在num1上做修改，并且类似concat和slice之类的方法都无效，都是不修改原数组，返回新数组的行为。
 */
var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
    nums1[m + i] = nums2[i];
  }
  console.log(nums1);
  nums1.sort((a, b) => a - b);
};

/**
 * 59/59 cases passed (72 ms)
 * Your runtime beats 9.92 % of javascript submissions
 * Your memory usage beats 7.69 % of javascript submissions (36.9 MB)
 * @param {*} nums1
 * @param {*} m
 * @param {*} nums2
 * @param {*} n
 * 有序，插入排序，从后往前
 */
const merge2 = function(nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  //从后向前插入排序
  while (len1 >= 0 && len2 >= 0) {
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  // len1<0时，此时nums2中还有数据未拷贝，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
  console.log(nums1, nums2, len2);
  arrayCopy(nums2, 0, nums1, 0, len2 + 1);
  function arrayCopy(arr2, l2, arr1, l1, length) {
    // nums1中删除未拷贝项，然后添加nums2中未拷贝项
    arr1.splice(l1, length, ...arr2.slice(l2, l2 + length));
  }
  console.log(nums1, nums2);
};

/**
 * 方法三
 * 59/59 cases passed (64 ms)
 * Your runtime beats 23.89 % of javascript submissions
 * Your memory usage beats 7.69 % of javascript submissions (36.5 MB)
 * @param {*} nums1
 * @param {*} m
 * @param {*} nums2
 * @param {*} n
 */
const merge3 = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m);
  nums2.splice(n, nums2.length - n);
  Object.assign(nums1, [...nums1, ...nums2]).sort((a, b) => a - b);
  console.log(nums1);
};
merge([2, 0], 1, [1], 1);
// @lc code=end
