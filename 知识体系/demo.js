// function swap(a, b) {
//   a ^= b; //a中存放两数互异的点位
//   b ^= a; // 取反 b 中不同于 a 的点位，也就是实现了 b = a
//   a ^= b; // 取反 a 中不同于 b 的点位，也就是实现了 a = b
// }
// console.log(swap(2, 3));

// function convertA2B(a, b) {
//   let n = a ^ b; // n中存放ab两数互异点位，计算1的次数代表需要转化的位数
//   let count = 0;
//   while (n !== 0) {
//     n = n & (n - 1); // n与n-1末位肯定是不同值，n&n-1可以消除一次1
//     count++;
//   }
//   return count;
// }
// console.log(convertA2B(9, 2));

function singleNumber(nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }
  return ans;
}
console.log(singleNumber([3, 3, 6, 6, 7, 4, 7]));
