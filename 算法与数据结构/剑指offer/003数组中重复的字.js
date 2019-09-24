/**
 * 面试题3-01-数组中重复的数字
 *
 * 给定一个长度为 n 的整数数组 nums，数组中所有的数字都在 0∼n−1 的范围内。
 * 请找出数组中任意一个重复的数字。
 * 注意：如果某些数字不在 0∼n−1 的范围内，或数组中不包含重复数字，则返回 -1；
 * 给定 nums = [2, 3, 5, 4, 3, 2, 6, 7]。返回 2 或 3。
 *
 * @param {number[]} nums
 * @return {number}
 * 思路：利用set
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 */
var duplicateInArray = function(nums) {
  let set = new Set();
  let Len = nums.length;
  let ans = -1;
  for (let i = 0; i < Len; i++) {
    if (set.has(nums[i])) {
      ans = nums[i];
    } else {
      set.add(nums[i]);
    }
    if (nums[i] > Len - 1 || nums[i] < 0) return -1;
  }
  return ans;
};

/**
 *
 * @param {*} nums
 * 思路：数组交换，将每一项放到数组角标位置，若出现某两个角标不同，值时相同的则是重复项
 * 时间复杂度O(n)，数组交换最多交换两次不算是两层循环
 * 空间复杂度O(1)， 原数组操作，没有使用额外空间。
 */
var duplicateInArray = function(nums) {
  let Len = nums.length;
  if (nums === null || Len === 0) return -1;
  for (let i = 0; i < Len; i++) {
    if (nums[i] > Len - 1 || nums[i] < 0) return -1;
  }
  for (let i = 0; i < Len; i++) {
    while (nums[i] !== i) {
      if (nums[i] === nums[nums[i]]) return nums[i];
      let temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }
  return -1;
};
console.log(duplicateInArray([2, 3, 4, 5, 1, 2, 3]));

/**
 * 面试题3-02-不修改数组找到重复的数字
 *
 * 在一个长度n+1数组中所有数字都在1~n中范围内，数组至少有一个是重复数字。
 * 请找出重复数字
 * 注意：不能修改输入的数组
 *  给定 nums = [2, 3, 5, 4, 3, 2, 6, 7]。返回 2 或 3。
 *
 * @param {number[]} nums
 * @param {number}
 * 思路：分治法，将数组区间一直进行二分并判断在区间内数字在整个数组中的次数，大于区间相减，说明此区间内必有差重复的数字。
 * 时间复杂度O(nlogn)，二分法复杂度O(logn)，count计算循环复杂度O(n)
 * 空间复杂度O(1)
 */
const duplicateInArray = function(nums) {
  let Len = nums.length;
  if (nums === null || Len === 0) return -1;
  let start = 1;
  let end = Len - 1;
  function countRange(nums, start, end) {
    let count = 0;
    for (let i = 0; i < Len; ++i) {
      if (nums[i] >= start && nums[i] <= end) {
        count++;
      }
    }
    return count;
  }
  while (end >= start) {
    let middle = ((end - start) >> 1) + start;
    // 计算出现次数
    let count = countRange(nums, start, middle);
    console.log(count, middle, start, end);
    if (start === end) {
      if (count > 1) return start;
    }
    // count > middle - start + 1 是count次数大于前区间的值，其中不是 end - start + 1
    if (count > middle - start + 1) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
  return -1;
};

console.log(duplicateInArray([1, 7, 5, 4, 3, 2, 6, 1]));
