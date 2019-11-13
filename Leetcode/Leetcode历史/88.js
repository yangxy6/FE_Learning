// 88-合并排序数组
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} 返回nums1
 */
const merge = (nums1, m, nums2, n) => {
    let len = m + n;
    for (let i = 0; i < nums2.length; i++) {
      if (n > i) {
        nums1[m + i] = nums2[i];
      }
    }
    return nums1.sort((a, b) => a - b);
  };
  console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));