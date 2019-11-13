// 1、旋转数组
const rotateArray = (arr, k) => arr.splice(arr.length - k).concat(arr);
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 1));

//2、实现(5).add(2).mintes(3)=4
Number.prototype.add = function(num) {
  return this.valueOf() + num;
};
Number.prototype.mintes = function(num) {
  return this.valueOf() - num;
};
console.log((5).add(2).mintes(3));

// 3、为什么普通 for 循环的性能远远高于 forEach 的性能，请解释其中的原因

/**
 * 数量级别最高，for循环性能越好，foreach基于for循环包装
 * for循环没有额外调用堆栈和上下文
 * foreach-》array.forEach(function(currentValue, index, arr), thisValue)运行中会调用额外参数，可能会拖慢速度
 * for循环: 0.076ms ->100
 * foreach: 0.006ms
 * for循环: 0.215ms -> 10000
 * foreach: 0.057ms
 * for循环: 3.366ms -> 1000000
 *  foreach: 5.246ms
 */
let arr = new Array(1000000);
console.time('for循环');
for (var i = 0; i < arr.length; i++) {}
console.timeEnd('for循环');

console.time('foreach');
arr.forEach(arr => {});
console.timeEnd('foreach');

function test() {
  console.log('start');
  setTimeout(() => {
    console.log('children2');
    Promise.resolve().then(() => {
      console.log('children2-1');
    });
  }, 0);
  setTimeout(() => {
    console.log('children3');
    Promise.resolve().then(() => {
      console.log('children3-1');
    });
  }, 0);
  Promise.resolve().then(() => {
    console.log('children1');
  });
  console.log('end');
}

test();

// 打印出 1 - 10000 之间的所有对称数 例如：121、1331 等
function getNumbers(n) {
  let arr = [...Array(n).keys()].filter(item => {
    return (
      item.toString().length > 1 &&
      item ===
        Number(
          item
            .toString()
            .split('')
            .reverse()
            .join('')
        )
    );
  });
  console.log(arr, arr.length);
}
function getNumbers2() {
  let result = [];
  for (let i = 1; i < 10; i++) {
    result.push(i * 11);
    for (let j = 0; j < 10; j++) {
      result.push(i * 101 + j * 10);
      result.push(i * 1001 + j * 110);
    }
  }
  console.log(result, result.length);
}
console.time('遍历10000');
getNumbers(10000);
console.timeEnd('遍历10000');

console.time('找对数');
getNumbers2();
console.timeEnd('找对数');
