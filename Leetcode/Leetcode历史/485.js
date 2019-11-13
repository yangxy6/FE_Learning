// 485. Max Consecutive Ones 最大连续数字的次数
// 出现1的连续次数，理解有误
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  let count = 0,
    res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) res = Math.max(res, ++count);
    else count = 0;
  }
  return res;
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0]));
// 先转成字符串，在截取0
var findMaxConsecutiveOnes = function(nums) {
  return Math.max(
    ...nums
      .join('')
      .split('0')
      .map(c => c.length)
  );
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0]));
