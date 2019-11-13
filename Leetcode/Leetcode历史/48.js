// 49-字谜
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
    let obj = {};
    strs.map(item => {
      const key = item
        .split('')
        .sort()
        .join('');
      if (!obj[key]) {
        obj[key] = [];
      }
      obj[key].push(item);
    });
    let arr = Object.values(obj).map(item => {
      return item.sort();
    });
    return arr;
  };
  console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));