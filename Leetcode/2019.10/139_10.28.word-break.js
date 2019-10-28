/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 动态规划
 * 特殊栗子会超时
 */
var wordBreak = function(s, wordDict) {
  let len = s.length;
  let dp = new Array(len + 1).fill(false);
  dp[0] = true;
  // i-代表要被分割的字符，例如c,ca,cat,cats
  // j-代表被分割后的字符，例如i=cats，j为cats,ats,ts,s
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (dp[i]) break;
      console.log(i, j, s.slice(j, i + 1));
      //s.slice(j, i + 1)出现在字典中，说明dp[i+1]也就是长度为i的s是可以被正好拆分的
      if (dp[j] && wordDict.includes(s.slice(j, i + 1))) {
        dp[i + 1] = true;
        console.log(dp);
      }
    }
  }
  return dp[len];
};
// console.log(
//   wordBreak('baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', [
//     'a',
//     'aa',
//     'aaa',
//     'aaaa',
//     'aaaaa',
//     'aaaaaa',
//     'aaaaaaa',
//     'aaaaaaaa',
//     'aaaaaaaaa',
//     'aaaaaaaaaa'
//   ])
// );

/**
 * 36/36 cases passed (68 ms)
 * Your runtime beats 36.06 % of javascript submissions
 * Your memory usage beats 91.67 % of javascript submissions (36.3 MB)
 * @param {*} s
 * @param {*} wordDict
 * 动态规划改良版
 * 参考：https://github.com/azl397985856/leetcode/blob/master/problems/139.word-break.md
 */
var wordBreak = function(s, wordDict) {
  const dp = Array(s.length + 1);
  dp[0] = true;
  for (let i = 0; i < s.length + 1; i++) {
    for (let word of wordDict) {
      if (dp[i - word.length] && word.length <= i) {
        //从头开始取s中wordDict每一个元素进行substring，若相等说明可以作为拆分的一个单词，有效避免'baaaaaaaaa',['a,aa']这种情况
        if (s.substring(i - word.length, i) === word) {
          dp[i] = true;
        }
      }
    }
  }
  console.log(dp);
  return dp[s.length] || false;
};

// @lc code=end
