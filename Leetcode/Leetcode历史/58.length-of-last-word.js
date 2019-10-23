/*
 * @lc app=leetcode id=58 lang=javascript
 *  √ Your runtime beats 99.72 % of javascript submissions （40ms）
 *  √ Your memory usage beats 63.1 % of javascript submissions (33.8 MB)
 * [58] Length of Last Word
 * 开始题目理解错了，提交了好多遍，题目意思就是字符串通过空格区别后最后一个不为0单词长度，空字符串和空空空字符串结果都是0
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let arrStr = s.split(' ');
  for (let i = arrStr.length - 1; i >= 0; i--) {
    let len = arrStr[i].length;
    if (len > 0) {
      return len;
    }
  }
  return 0;
};
console.log(lengthOfLastWord('    day  '));
