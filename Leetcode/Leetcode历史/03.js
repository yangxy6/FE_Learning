var lengthOfLongestSubstring = function(s) {
  let obj = {};
  let newObj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = s[i];
    } else {
      if (Object.keys(newObj).length < Object.keys(obj).length) {
        newObj = obj;
      }
      obj = {};
      obj[s[i]] = s[i];
    }
  }
  console.log(obj, newObj);
  return Math.max(Object.keys(obj).length, Object.keys(newObj).length);
};

console.log(lengthOfLongestSubstring('dvdf'));

function lengthOfLongestSubstring(s) {
  const map = {};
  var left = 0;

  return s.split('').reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
}
console.log(lengthOfLongestSubstring('dvdf'));
// var lengthOfLongestSubstring = function(s) {
//     let obj = {},
//       newObj = {};
//     let flag = false;
//     for (let i = 0; i < s.length; i++) {
//       if (!obj[s[i]]) {
//         obj[s[i]] = s[i];
//       } else {
//       //   if (!flag) {
//       //     newObj = obj;
//       //     flag = true;
//       //   }
//         obj = {};
//         obj[s[i]] = s[i];
//         console.log(obj);
//       }
//     }
//     console.log(obj,newObj);
//     return Math.max(Object.keys(obj).length, Object.keys(newObj).length);
//   };

//   console.log(lengthOfLongestSubstring('pwwkew'));

function test(s, t) {
  let left = 0,
    right = 0;
  let tempHash = {};
  let result;

  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    
    if (!tempHash[element]) {
      tempHash[element] = 1;
    } else {
      tempHash[element] = +1;
    }
  }
  console.log(tempHash)
}

console.log(test('abacdabcacab','aabc'))
