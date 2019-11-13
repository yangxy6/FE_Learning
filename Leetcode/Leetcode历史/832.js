//832-翻转图像
// reverse()颠倒数组的顺序
const flipAndInvertImage = arr => {
  return arr.map(item => {
    return item.reverse().map(i => {
      return (i = i === 1 ? 0 : 1);
    });
  });
};

console.log(flipAndInvertImage([[1, 1, 0], [0, 1, 0, 1], [1, 0, 1], [0, 0, 0]]));
