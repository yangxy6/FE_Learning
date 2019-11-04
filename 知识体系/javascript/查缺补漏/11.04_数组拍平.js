// 数组拍平
let arr = [1, 2, [3, [4, [5]]], 6];

// reduce
console.time('reduce');
function flat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
  }, []);
}
console.timeEnd('reduce');

// replce正则匹配[]
console.time('replce1');
function flat2(arr) {
  return JSON.stringify(arr)
    .replace(/\[|\]/g, '')
    .split(',');
}
console.timeEnd('replce1');

console.time('replce2');
function flat3(arr) {
  let str = JSON.stringify(arr).replace(/\[|\]/g, '');
  str = '[' + str + ']';
  return JSON.parse(str);
}
console.timeEnd('replce2');

// 扩展运算符
console.time('扩展运算符');
function flat4(arr) {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.timeEnd('扩展运算符');

console.log(flat(arr));
console.log(flat2(arr));
console.log(flat3(arr));
console.log(flat4(arr));
// reduce: 0.100ms
// replce1: 0.008ms
// replce2: 0.003ms
// 扩展运算符: 0.003ms
// 结论：reduce和replce+split效率要慢一点
