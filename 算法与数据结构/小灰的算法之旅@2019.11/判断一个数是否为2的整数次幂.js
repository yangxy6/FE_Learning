/**
 *
 * @param {*} num
 * 位运算 (n&n-1) === 0 证明是2的整数次幂
 */
function isPowerOf2(num) {
  return (num & (num - 1)) === 0;
}
console.log(isPowerOf2(1));
