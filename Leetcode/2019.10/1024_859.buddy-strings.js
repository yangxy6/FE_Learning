/*
 * @lc app=leetcode id=859 lang=javascript
 * 23/23 cases passed (64 ms)
 * Your runtime beats 60.25 % of javascript submissions
 * Your memory usage beats 75 % of javascript submissions (35.6 MB)
 * [859] Buddy Strings
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 * 理解盲点：只有一处交换，其他都是不亲密字符串
 * 思路：1、A===B时，记录有重复元素->true 没有->false
 *      2、A!==B 判断AB中不同元素的次数，次数2说明只能交换一次，并且strA和排序后strB是相同的
 */

const buddyStrings = function(A, B) {
  if (A === B) {
    let set = new Set(); //确定是否有重复元素，有两个以上就返回true
    for (let i = 0; i < A.length; i++) {
      if (set.has(A.charAt(i))) {
        return true;
      } else {
        set.add(A.charAt(i));
      }
    }
    return false;
  } else {
    let count = 0; // 记录不同次数，应为2
    let strA = '',
      strB = '';
    for (let i = 0; i < A.length; i++) {
      if (A.charAt(i) !== B.charAt(i)) {
        count++;
        strA += A.charAt(i);
        strB += B.charAt(i);
      }
    }
    if (
      count === 2 &&
      strA ===
        strB
          .split('')
          .sort()
          .join('')
    )
      return true;
  }
  return false;
};
console.log(buddyStrings('aa', 'aa')); // T
console.log(buddyStrings('ab', 'ab')); // F
console.log(buddyStrings('ab', 'ba')); //T
console.log(buddyStrings('abcd', 'abdc')); //T
console.log(buddyStrings('abcd', 'dcba')); //F
console.log(buddyStrings('abab', 'abab')); //T
// @lc code=end
