/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * √ 1000/1000 cases passed (72 ms)
 * √ Your runtime beats 66.24 % of javascript submissions
 * √ Your memory usage beats 20 % of javascript submissions (36.3 MB)
 * [171] Excel Sheet Column Number
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    // 相当于map，利用charCodeAt方法，因为A是1，之后要+1
    let num = s[i].charCodeAt() - 'A'.charCodeAt() + 1;
    // 从最后一位开始，26进制
    ans = ans * 26 + num;
  }
  return ans;
};
console.log(titleToNumber('AAA'));
