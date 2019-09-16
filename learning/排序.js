/**
 * 冒泡排序
 * @param {*} arr
 * 两层循环，外层循环冒泡层数，里层排序。
 * 优化：对于已经排好序的不需要两次循环，设立一个标志位isSort，里层循环数arr.length-1-i，减去已经排好序的。
 * 时间复杂度O(n2)
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSort = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let temp;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSort = false;
      }
    }
    if (isSort) {
      break;
    }
  }
  return arr;
}
bubbleSort([5, 8, 1, 7, 2, 12, 45, 67, 22]);

/**
 * 选择排序
 * @param {*} arr
 * 每次循环找到最小的，记录下标,循环结束后和i个交换位置
 * 时间复杂度O(n2)
 */
function SelectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i; // 最小值下标初始值为第i个
    // 里层循环从下一个开始
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j; // 最小值位置
      }
    }
    // 交换位置，里层循环结束后找到最小值以后再交换
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

/**
 * 插入排序
 * @param {*} arr
 * 从第一个开始，分成已排序和未排序两类，从未排序的第一项和循环和已排序项比较，排好位置后插入值即可
 */
function insertSort(arr) {
  // 第一个不动，从i=1开始
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i]; // 选择未排序的第一项
    let j = 0; // 记录插入的位置
    // 取出为排序的第一项后和已排序的进行循环比较 此时j=i-1
    for (j = i - 1; j >= 0; j--) {
      // 当比较已排序arr[j]>选定value时，arr[j]向后移动arr[j+1]，注意此时arr[j+1]和arr[j]值相同，都是arr[j],相反不动
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    // 当循环结束，arr[j+1]已经排序完毕，但是值还没插入，直接插入value值
    arr[j + 1] = value;
  }
  return arr;
}
console.log(insertSort([5, 8, 1, 7, 2, 12, 45, 67, 22]));
