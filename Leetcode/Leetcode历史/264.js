/**
 * @param {number} n n不能超过1690
 * @return {number}
 */
const nthUglyNumber = n => {
  let nthUglyArr = [1],
    index_2 = 0,
    index_3 = 0,
    index_5 = 0,
    value_2,
    value_3,
    value_5;
  for (let i = 1; i < n; i++) {
    value_2 = nthUglyArr[index_2] * 2;
    value_3 = nthUglyArr[index_3] * 3;
    value_5 = nthUglyArr[index_5] * 5;
    let value = Math.min(value_2, value_3, value_5);
    // 确定当前丑数是哪个数相乘后，移动相乘数字的计数器
    if (value === value_2) index_2++;
    if (value === value_3) index_3++;
    if (value === value_5) index_5++;
    nthUglyArr[i] = value;
  }
  return nthUglyArr[n - 1];
};
console.log(nthUglyNumber(11)); //->15
