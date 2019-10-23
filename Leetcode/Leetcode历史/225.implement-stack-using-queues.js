/*
 * @lc app=leetcode id=225 lang=javascript
 * √ 16/16 cases passed (48 ms)
 * √ Your runtime beats 89.85 % of javascript submissions
 * √ Your memory usage beats 75 % of javascript submissions (33.8 MB)
 * [225] Implement Stack using Queues
 */
/**
 * Initialize your data structure here.
 * 模拟栈
 */
var MyStack = function() {
  this.stack = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.stack.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.stack.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.stack.length === 0;
};

var obj = new MyStack();

var param_4 = obj.empty();
console.log(param_4);
