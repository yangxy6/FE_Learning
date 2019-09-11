// 求两个数最大公约数

/**
 * 辗转相除法（a，b之间的最大公约数是ab与ab相除余数之间的公约数）
 * @param {*} a
 * @param {*} b
 * 缺点：数较大时，取模性能消耗较大
 */
function commonDivisor(a, b) {
  if (a % b === 0) {
    return b;
  }
  if (b % a === 0) {
    return a;
  }
  return commonDivisor(a, a % b);
}

/**
 * 更相减损术：两个正整数a,b（a>b）他们之间的最大公约数等于a-b差值和较小数b之间最大公约数
 * @param {*} a
 * @param {*} b
 * 缺点：两个数差值较大时，递归次数较多
 */
function commonDivisor(a, b) {
  if (a === b) return a;
  let small = a > b ? b : a;
  let big = a > b ? a : b;
  return commonDivisor(big - small, small);
}

/**
 * 更相减损术+位运算
 * @param {*} a
 * @param {*} b
 * 思路：都是偶数，左移1位后，结果右移1位
 *       一个是偶数，一个是奇数，偶数左移1位
 *      都是奇数，用减损术，此时a-b必然是偶数，然后继续使用位运算
 * 时间复杂度：O(log(max(a,b)))
 */
function commonDivisor(a, b) {
  if (a == b) return a;
  // a&1 === 0 -> 偶数
  if ((a & 1) == 0 && (b & 1) == 0) {
    // a >> 1 左移1->a/2
    return commonDivisor(a >> 1, b >> 1) << 1;
  } else if ((a & 1) == 0 && (b & 1) != 0) {
    return commonDivisor(a >> 1, b);
  } else if ((a & 1) != 0 && (b & 1) == 0) {
    return commonDivisor(a, b >> 1);
  } else {
    let big = a > b ? a : b;
    let small = a < b ? a : b;
    return commonDivisor(big - small, small);
  }
}
console.log(commonDivisor(24, 120));
