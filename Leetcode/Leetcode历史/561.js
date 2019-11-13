// 561 数组分区
/**
 * @param {number []} nums
 * @returns {number}
 * 将数组排序，两两分区，返回每对最小值的和
 */
const arrayPairSum = arr => {
    let sum = 0;
    if (arr.length % 2 !== 0) return sum;
    arr
      .sort((a, b) => a - b)
      .map((item, index) => {
        if (index % 2 === 0) {
          sum += item;
        }
      });
    return sum;
  };
  // filter(currentValue,index,arr) 三个参数
  const arrayPairSum = arr => {
    return arr
      .sort((a, b) => a - b)
      .filter((value, index) => index % 2 === 0)
      .reduce((a, b) => a + b);
  };
  console.log(arrayPairSum([1, 4, 3, 5]));