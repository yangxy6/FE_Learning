let n = 1;
console.time('test');
do {
  n++;
  break;
} while (true);
console.log(n);
console.timeEnd('test');

