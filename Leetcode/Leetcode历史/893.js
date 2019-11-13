// 893-Groups of Special-Equivalent Strings 特殊等价字符
/**
 * @param {string[]} A
 * @return {number}
 */
const numSpecialEquivGroups = A => {
    const set = new Set();
    for (let i = 0; i < A.length; i++) {
      let odd = [],
        even = [];
      for (let j = 0; j < A[i].length; j++) {
        j % 2 === 0 ? even.push(A[i][j]) : odd.push(A[i][j]);
      }
      even.sort();
      odd.sort();
      set.add([...odd, ...even].join(''));
      console.log(set);
    }
    return set.size;
  };
  console.log(numSpecialEquivGroups(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']));
  //console.log('cbad'.split('').sort().join(''));
  console.log(['cbad', 'abcd'].sort());