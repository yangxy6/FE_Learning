/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * √ 109/109 cases passed (52 ms)
 * √ Your runtime beats 85.1 % of javascript submissions
 * √ Your memory usage beats 93.77 % of javascript submissions (33.7 MB)
 * [66] Plus One
 * 6145390195186705543用Number会出现后面精度丢失，使用BigInt
 * BigInt不能直接和Number类型数字相加，需要在数字后面加n表示BigInt
 *
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  return String(BigInt(digits.join('')) + 1n).split('');
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
