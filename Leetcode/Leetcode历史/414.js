//414. Third Maximum Number
// 排序，set去重，判断第三个有没有值
/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = nums => {
  let arr = [...new Set(nums.sort((a, b) => b - a))];
  return arr[2] || arr[2] === 0 ? arr[2] : arr[0];
};
console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]));
