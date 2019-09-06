/*
 * @lc app=leetcode id=1154 lang=javascript
 * √ 246/246 cases passed (60 ms)
 * √ Your runtime beats 42.29 % of javascript submissions
 * √ Your memory usage beats 100 % of javascript submissions (33.8 MB)
 * [1154] Day of the Year
 */
/**
 * @param {string} date
 * @return {number}
 * 思路：先处理year,month,day,闰年判断是能被4整除，但是不能被100整除，所以1900是平年
 */
var dayOfYear = function(date) {
  let enumMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let year = Number(date.split('-')[0]);
  let month = Number(date.split('-')[1]);
  let day = Number(date.split('-')[2]);
  let count = 0;
  if (year % 4 === 0 && year % 100 !== 0) {
    enumMonth[1] = 29;
  }
  for (let i = 0; i < enumMonth.length; i++) {
    if (month - 1 === i) {
      return count + day;
    }
    count += enumMonth[i];
  }
};
console.log(dayOfYear('1900-03-25'));
