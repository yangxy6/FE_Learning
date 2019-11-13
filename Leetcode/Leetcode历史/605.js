// 605-放花
// 一次循环顺序执行就可以，let arr = [0, ...flowerbed, 0];这个写法可以少了好几个判断
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  let arr = [0, ...flowerbed, 0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] + arr[i - 1] + arr[i + 1] === 0 && n > 0) {
      arr[i] = 1;
      n--;
    }
  }
  return n === 0;
};
console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1));
