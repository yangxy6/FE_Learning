//189. Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} 改变原数组
 */
const rotate = (nums, k) => {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};
console.log(rotate([2, 4, 6, 8, 10], 2));
const rotate = (nums, k) => {
  while (k !== 0) {
    nums.unshift(nums.pop());
    k--;
  }
  return nums;
};
console.log(rotate([2, 4, 6, 8, 10], 2));
// splice(location) 第一个参数为删除的位置，第二参数不传则是从删除位置删除到结束
const rotate = (nums, k) => {
  let arr = nums.splice(nums.length - k);
  nums.unshift(...arr);
  return nums;
};
console.log(rotate([2, 4, 6, 8, 10], 2));
