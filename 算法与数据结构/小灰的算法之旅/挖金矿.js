/**
 * 获得金矿最大收益
 * @param {number} w 工人数量
 * @param {number} n 可选金矿数量
 * @param {Array} p 金矿开采所需要的工人数量
 * @param {Array} g 金矿储量
 * 缺点：会重复计算递归，时间复杂度稍高
 * 时间复杂度O(2的n次幂)
 */
function getBestGold(w, n, p, g) {
  // 金矿数为0或者工人数为0
  if (w === 0 || n === 0) {
    return 0;
  }
  // 当所剩工人不够挖掘金矿，只有一种最优子结构，减少金矿数量
  // n-1->第几个金矿
  if (n >= 1 && w < p[n - 1]) {
    return getBestGold(w, n - 1, p, g);
  }
  // 常规下有两种最优子结构（不挖当前金矿和挖当前金矿）
  return Math.max(getBestGold(w, n - 1, p, g), getBestGold(w - p[n - 1], n - 1, p, g) + g[n - 1]);
}

/**
 *
 * @param {*} w 工人数量
 * @param {*} p 金矿开采所需要的工人数量
 * @param {*} g 金矿储量
 * 时间复杂度和空间复杂度O(nw)
 */
function getBestGold2(w, p, g) {
  // 创建表格，二维数组，多一行代表工人个数，多一列代表金矿
  let result = [];
  for (let i = 0; i <= g.length; i++) {
    result[i] = [];
    for (let j = 0; j <= w; j++) {
      result[i][j] = 0;
    }
  }
  // i-> 金矿数 j-> 工人数
  for (let i = 1; i <= g.length; i++) {
    for (let j = 1; j <= w; j++) {
      // i-1->第几个金矿，j < p[i - 1]表示工人数量<开采金矿所需要的人数->前一列值
      if (j < p[i - 1]) {
        result[i][j] = result[i - 1][j];
      } else {
        // [j - p[i - 1] -> 工人数-开采矿已经用掉人数
        // g[i - 1] 加上开采当前矿或得的收益
        result[i][j] = Math.max(result[i - 1][j], result[i - 1][j - p[i - 1]] + g[i - 1]);
      }
    }
  }
  // 表格最后一行最后一列代表最大收益
  return result[g.length][w];
}

/**
 *
 * @param {*} w
 * @param {*} p
 * @param {*} g
 * 思路：只需要保存上一行数据，新的在从右到左覆盖老数据，数组最后一个就是收益最大的值
 * 时间复杂度和空间复杂度O(n)
 */
function getBestGold3(w, p, g) {
  // 初始化一维数组，每一项都是0
  //   let result = [];
  //   for (let i = 0; i <= w; i++) {
  //     result[i] = 0;
  //   }
  let result = new Array(w + 1);
  result.fill(0);
  // i-> 金矿数 j-> 工人数
  for (let i = 1; i <= g.length; i++) {
    for (let j = w; j >= 1; j--) {
      // 工人数量可以开采金矿了
      if (j >= p[i - 1]) {
        result[j] = Math.max(result[j], result[j - p[i - 1]] + g[i - 1]);
      }
    }
  }
  return result[w];
}
console.log(getBestGold3(10, [5, 5, 3, 4, 3], [400, 500, 200, 300, 350]));
