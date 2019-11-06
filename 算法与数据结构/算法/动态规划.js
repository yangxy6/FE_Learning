// 斐波那契

/**
 * 递归
 * @param {*} n
 */
function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

/**
 * 递归——带备忘录（自顶向下）
 * @param {*} n
 */
function fib2(n) {
  let arr = new Array(n + 1).fill(-1);
  arr[1] = arr[2] = 1;
  if (arr[n] === -1) {
    arr[n] = fib2(n - 1) + fib2(n - 2);
  }
  return arr[n];
}

function fib3(n) {
  let arr = new Array(n + 1).fill(0);
  arr[1] = arr[2] = 1;
  return helper(n, arr);
}
function helper(n, arr) {
  if (arr[n] === 0) {
    arr[n] = helper(n - 1, arr) + helper(n - 2, arr);
  }
  return arr[n];
}

/**
 * 动态规划
 */
function fib4(n) {
  let dp = [];
  dp[1] = dp[2] = 1;
  for (let i = 0; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

function fib5(n) {
  if (n < 2) return 1;
  let pre = 0,
    cur = 1;
  for (let i = 0; i < n - 1; i++) {
    let sum = pre + cur;
    pre = cur;
    cur = sum;
  }
  return cur;
}

console.time('递归');
console.log(fib(20));
console.timeEnd('递归'); //递归: 9.174ms
console.time('备忘录的递归');
console.log(fib3(20));
console.timeEnd('备忘录的递归'); //备忘录的递归: 0.241ms
console.time('动态规划');
console.log(fib2(20));
console.timeEnd('动态规划'); //动态规划: 4.993ms
console.time('动态规划优化版');
console.log(fib5(20));
console.timeEnd('动态规划优化版'); //动态规划优化版: 0.149ms
