// 261-Combination Sum III
// 倒序排，递归
// 未完成
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = (k, n) => {
  let result = [];
  const helper = (temp, sum, start) => {
    if (temp.length === k && sum === 0) {
      result.push(temp.slice());
    } else if (k === 1) {
      result.push([n]);
    } else {
      for (var i = start; i > 0; i--) {
        if (i > sum) continue;
        temp.push(i);
        helper(temp, sum - i, i - 1);
        temp.pop();
      }
    }
  };
  helper([], n, 9);
  return result;
};
const combinationSum3 = (k, n) => {
  let result = [];
  const helper = (temp, sum, start) => {
    if (temp.length === k && sum === 0) {
      result.push(temp.slice());
    } else if (k === 1) {
      result.push([n]);
    } else {
      for (var i = start; i <= 9; i++) {
        if (i > sum) continue;
        temp.push(i);
        helper(temp, sum - i, i + 1);
        temp.pop();
      }
    }
  };
  helper([], n, 1);
  return result;
};
console.log(combinationSum3(3, 7));
