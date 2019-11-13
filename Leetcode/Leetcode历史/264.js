// 264-Ugly Number II 丑数
// 丑数：除了1以外只能被2,3,5整除的数，比如1,2,3,4,5,6,8,9,10,12,15->14不是丑数
// 思路：初始化数组有1，之后的丑数必定是之前的丑数乘以2,3,5得到，2,3,5每个数字都有个单独的计数器，每次i*2,3,5后最小值就是当前计算的丑数，放入数组后，单独的计数器更新+1
// 举栗子，当2放入后，数组中有1,2，相对来说1*2已经是丑数，2的计数器+1后2*2必定是丑数，同理4放入数组后更新+1,4*3也是丑数，每次移动2,3,5计数器+1获取丑数，取最小值是正序放入数组中，同时可以拿到第n个
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
console.log(nthUglyNumber(11));
