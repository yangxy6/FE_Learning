// 题目：给出一个正整数，找出这个正整数所有数字全排列的一下个数。（一个整数包含全部组合中，找到一个大于且仅大于袁术的新整数）
// 举栗子：
// 输入12345，返回12354
// 输入12354，返回12435
// 输入12435，返回12453

/**
 *
 * @param {*} number
 * 思路：1.从后开始找倒序index 2.交换index和最后一项 3.交换后其他项要正序index+1
 */
function findNearestNumber(number) {
  // 1. 寻找倒序index
  let index = 0; //倒序index
  for (let i = number.length - 1; i > 0; i--) {
    if (number[i] > number[i - 1]) {
      index = i - 1;
      break;
    }
  }
  if (index === 0) return null; //不符合题意
  //2. 交换倒序index和最后一项
  let temp = number[index];
  number[index] = number[number.length - 1];
  number[number.length - 1] = temp;
  //3.其他的要正序排列，从index下一位开始
  for (let i = number.length - 1, j = index + 1; i > j; i--, j++) {
    let temp2 = number[j];
    number[j] = number[i];
    number[i] = temp2;
    break;
  }
  console.log(number);
}
findNearestNumber([1, 3, 2, 5, 4]);
