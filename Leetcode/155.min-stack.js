/*
 * @lc app=leetcode id=155 lang=javascript
 * √ 18/18 cases passed (100 ms)
 * √ Your runtime beats 84.85 % of javascript submissions
 * √ Your memory usage beats 31.25 % of javascript submissions (44.5 MB)
 * [155] Min Stack
 * 思路：备用栈，push时第一个和小于元素放入栈中，pop时备用栈也进行删除
 * 时间复杂度低，空间复杂度高，用空间换时间
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.arr = [];
  this.reserveArr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.arr.push(x);
  if (this.reserveArr.length === 0 || x <= this.reserveArr[this.reserveArr.length - 1]) {
    this.reserveArr.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.reserveArr[this.reserveArr.length - 1] === this.arr[this.arr.length - 1]) {
    this.reserveArr.pop();
  }
  return this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.reserveArr.length <= 0) {
    return;
  }
  return this.reserveArr[this.reserveArr.length - 1];
};

/*
 * @lc app=leetcode id=155 lang=javascript
 * √ 18/18 cases passed (164 ms)
 * √ Your runtime beats 26.74 % of javascript submissions
 * √ Your memory usage beats 87.5 % of javascript submissions (43.9 MB)
 * [155] Min Stack
 * 思路：去最小值循环一次
 * 时间换空间
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.array = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.array.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  return this.array.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.array[this.array.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let min = this.array[0];
  for (let i = 0; i < this.array.length; i++) {
    if (min > this.array[i]) min = this.array[i];
  }
  return min;
};
