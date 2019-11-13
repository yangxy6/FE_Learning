//665. Non-decreasing Array
// 不会
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = nums => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
      if (count > 1) return false;
      if (nums[i] > nums[i - 1] && nums[i] < nums[i + 2]) return false;
    }
  }
  return true;
};
console.log(checkPossibility([3, 4, 2, 3]));

var checkPossibility = function(nums) {
  var p = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      if (p != -1) {
        return false;
      } else {
        p = i;
      }
    }
  }
  return p == -1 || p == 0 || p == nums.length - 2 || nums[p - 1] <= nums[p + 1] || nums[p] <= nums[p + 2];
};
console.log(checkPossibility([4, 2, 3]));
