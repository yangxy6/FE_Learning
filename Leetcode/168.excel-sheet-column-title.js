/*
 * @lc app=leetcode id=168 lang=javascript
 * √ 18/18 cases passed (48 ms)
 * √ Your runtime beats 87.86 % of javascript submissions
 * √ Your memory usage beats 14.29 % of javascript submissions (34 MB)
 * [168] Excel Sheet Column Title
 */
/**
 * @param {number} n
 * @return {string}
 * 思路：循环n/26直到n为0，count % 26 === 0正好是26倍数时需要count/26-1，同时将Z放到map第一位。
 */
var convertToTitle = function(n) {
  const map = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
  let ans = '';
  let count = n;

  while (count) {
    ans = map[count % 26] + ans;
    count = count % 26 === 0 ? Math.floor(count / 26) - 1 : Math.floor(count / 26);
  }
  return ans;
};
console.log(convertToTitle(701));
