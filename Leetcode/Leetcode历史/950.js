// 950-Reveal Cards In Increasing Order
// 先排序，根据判定顺序反过来操作，先是最大项，然后头增加尾部的最后一项，再加上扔掉的上一项
/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = deck => {
  deck.sort((a, b) => a - b);
  let result = [deck[deck.length - 1]];
  for (let i = deck.length - 2; i >= 0; i--) {
    result.unshift(result.pop());
    result.unshift(deck[i]);
  }
  return result;
};
console.log(deckRevealedIncreasing([2, 5, 7, 11, 13, 17, 3]));
