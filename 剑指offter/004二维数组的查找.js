// 题目描述：
// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该函数。

/**
 * @param {number[][]} array
 * @param {number} target
 * @return {boolean}
 * 思路：从右上角数字作为比较，或者左下角也可，注意：不能使用左上角和右下角，永远最大最小不会有变化
 * 当target > array[r][c]说明目标数字比右上角大，进入下一行
 * 当target < array[r][c]说明目标数字比右上角的小，列缩小一次，直到找到目标数字
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 */
var searchArray = function(array, target) {
  if (array === null || array.length === 0 || array[0].length === 0) return false;
  let row = array.length;
  let cols = array[0].length;
  let r = 0; //第一行
  let c = cols - 1; // 右上角
  while (c >= 0 && r <= row - 1) {
    if (target === array[r][c]) {
      return true;
    } else if (target > array[r][c]) {
      // 一行行往下走
      r++;
    } else {
      //一列列往左走
      c--;
    }
  }
  return false;
};

console.log(searchArray([[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]], 7));
