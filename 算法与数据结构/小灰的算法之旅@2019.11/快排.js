// /**
//  *
//  * @param {*} arr
//  * 解法一
//  * 思路：分治法，选择一个基准元素（随机，中间或者第一个都行），将大于和小于基准元素的分别放到数组中，递归小数组
//  * 时间复杂度：O(nlogn)，空间复杂度：浪费很多额外空间，胜在简单
//  */
// function quickSort(arr) {
//   if (arr.length < 2) return arr;
//   let pviot = arr[0];
//   let left = [];
//   let right = [];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pviot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat([pviot], quickSort(right));
// }
// /**
//  * 解法二
//  * 思路：分治法，选择一个基准元素，和一个mark标志，数组循环时当发现小于基准元素时,mark与当前项进行交换，保证mark及mark之前都是小于基准元素，循环结束交换mark和基准元素位置。再次递归
//  * 时间复杂度：O(nlogn)，空间复杂度O(logn)递归调用损耗
//  */
// function quickSort(arr, start, end) {
//   if (start >= end) return;
//   let pviot = arr[start];
//   let mark = start;
//   for (let i = start + 1; i <= end; i++) {
//     if (arr[i] < pviot) {
//       mark++;
//       // mark从0开始，mark所在都是小于基准元素的
//       // 当arr[i]<pviot时,i和mark元素进行交换保证小于元素都在mark前
//       let temp = arr[mark];
//       arr[mark] = arr[i];
//       arr[i] = temp;
//     } else {
//       // 大于基准元素直接略过，知道i<pviot
//     }
//   }
//   // mark处正是分割点，将mark与pviot交换位置
//   arr[start] = arr[mark];
//   arr[mark] = pviot;
//   quickSort(arr, start, mark - 1);
//   quickSort(arr, mark + 1, end);
//   return arr;
// }

/**
 * 
 * @param {*} arr 
 * 思路：filter方法 和展开运算符
 */
function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  let left = arr.filter((v, i) => v <= pivot && i !== 0);
  let right = arr.filter(v => v > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([4, 7, 5, 1, 3, 9, 2], 0, 6));
