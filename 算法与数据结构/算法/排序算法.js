// 归并排序
// 归并是一种分治算法，思想是将原始数据切分成较小的数组，知道每个小数组只有一个位置，接着讲小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。
// 归并排序也是递归的

function ArrayList() {
  let array = []
  // 辅助函数
  // slice() 并不会改变原数组，返回一个新数组
  // mergeSortRec负责将数组拆分成小数组
  let mergeSortRec = function(array) {
    let length = array.length
    if (length === 1) {
      return array
    }
    let mid = Math.floor(length / 2),
      left = array.slice(0, mid),
      right = array.slice(mid, length)
    return merge(mergeSortRec(left), mergeSortRec(right))
  }
  // merge()负责合并和排序小数组产生大数组
  let merge = function(left, right) {
    let result = [],
      il = 0,
      ir = 0
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++])
      } else {
        result.push(right[ir++])
      }
    }
    while (il < left.length) {
      result.push(left[il++])
    }
    while (ir < right.length) {
      result.push(right[ir++])
    }
    return result
  }
  this.insert = function(item) {
    array.push(item)
  }
  this.toString = function() {
    return array.join()
  }
  // 归并
  this.mergeSort = function() {
    array = mergeSortRec(array)
  }
}

let array = new ArrayList()
array.insert(8)
array.insert(7)
array.insert(6)
array.insert(5)
array.insert(4)
array.insert(3)
array.insert(2)
array.insert(1)
console.log(array.toString())
array.mergeSort()
console.log(array.toString())

var quickSort = function(arr) {
  var arrLength = arr.length
  if (arrLength <= 1) return arr
  var pivotIndex = Math.floor(arrLength / 2)
  var pivot = arr[pivotIndex]
  var left = []
  var right = []
  for (var i = 0; i < arrLength; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    }
    if (arr[i] > pivot) {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
let arr = [2, 65, 7, 3, 6, 62, 26, 17]
console.log(quickSort(arr), arr === quickSort(arr))
