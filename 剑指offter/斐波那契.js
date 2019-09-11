/**
 *
 * @param {*} n
 * 递归方式
 * 100->卡死
 */
function Fibonacci(n) {
  if (n <= 0) return 0;
  if (n == 1) return 1;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

/**
 * 
 * @param {*} n 
 * 循环方式
 * 100-> 7.52ms
 */
function Fibonacci(n) {
  if (n <= 0) return 0;
  if (n == 1) return 1;
  let fiOne = 1;
  let fiTwo = 0;
  let fiN = 0;
  for (let i = 2; i <= n; i++) {
    fiN = fiOne + fiTwo;
    fiTwo = fiOne;
    fiOne = fiN;
  }
  return fiN;
}


console.time();
console.log(Fibonacci(100));
console.timeEnd();
