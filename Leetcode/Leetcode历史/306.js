// Tag:backtracking 回溯算法
// 306

let num = '199100199';
for (let i = 0; i < num.length - 1; i++) {
  const first = num[i];
  for (let j = 1; j < num.length - 2; j++) {
    const second = num[j];
    //   console.log(second);
    if (second === 0) break;
    console.log(first, second, num[j + 1]);
    if (first + second === num[j + 1]) {
      console.log(first, second, num[j + 1]);
    }
  }
}
