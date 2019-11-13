function numJewelsInStone(j, s) {
  if (!!j || !!s) {
    return 0
  }
  let count = 0
  for (c of s) {
    if (j.includes(c)) count++
  }
  return count
}

function numJewelsInStone(j, s) {
  return s.split('').filter(stone => j.indexOf(stone) !== -1).length
}
/**
 * filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
 *注意： filter() 不会对空数组进行检测。
 *注意： filter() 不会改变原始数组。
 */

console.log(numJewelsInStone('ab', 'aZFGbB'))

let arr = [1, 24, 56, 767, 'df']
let test = arr.map(item => {
  return {
    id: item
  }
})
console.log(arr, test)
/*map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
 *map() 方法按照原始数组元素顺序依次处理元素。
 *注意： map() 不会对空数组进行检测。
 *注意： map() 不会改变原始数组。
 */
