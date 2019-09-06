/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 * 思路：平衡括号使用stack，出现{,入栈,出现}出栈，同时判断{}是否对应，返回stack的长度
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let obj = {
      '[': ']',
      '{': '}',
      '(': ')'
    };
    let stack = [];
    let info = s.split('');
    for (let i = 0; i < info.length; i++) {
      // 过滤符号同时压入栈中
      if (Object.keys(obj).includes(info[i])) {
        stack.push(info[i]);
      } else {
        if (stack.length === 0) {
          return false;
        } else {
          // 栈顶元素和当前元素能对应
          if (obj[stack[stack.length - 1]] === info[i]) {
            stack.pop();
          } else {
            // 对应不上说明符号不是对应的
            return false;
          }
        }
      }
    }
    return stack.length === 0;
  };
  console.log(isValid('[(])'));