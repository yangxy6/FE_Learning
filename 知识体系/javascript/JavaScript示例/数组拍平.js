// 数组拍平

/**
 * @param {Array} arr 多维数组
 * @return {Array} arr 单维数组
 */
function flat1(arr) {
  let result = [];
  arr.map(item => {
    if (Array.isArray(item)) {
      result = result.concat(flat(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

/**
 *
 * @param {Array} arr
 * 思路：reduce和扩展运算符
 */
function flat2(arr) {
  return arr.reduce((pre, cur) => {
    return Array.isArray(cur) ? [...pre, ...flat2(cur)] : [...pre, cur];
  }, []);
}

/**
 * toString()
 * @param {*} arr
 */
function flat3(arr) {
  return arr
    .toString()
    .split(',')
    .map(item => +item);
}

console.log(flat2([1, [2, [3, [4, [5, [6]]]]]]));
