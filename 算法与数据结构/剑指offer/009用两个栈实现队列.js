//题目：用两个栈实现一个队列，队列声明如下，请实现他的两个函数appendTail和deleteHesd，分别完成在队列尾部插入节点和队列头部删除节点的功能，
/**
 * 思路：两个栈，一个负责入栈，一个负责出栈，当pop时需要判断outStack是否为空，空时inStack出栈并压入ouStack栈
 */
function Queue() {
  this.inStack = [];
  this.outStack = [];
}
Queue.prototype.push = function(item) {
  this.inStack.push(item);
};
Queue.prototype.pop = function() {
  if (this.inStack.length === 0 && this.outStack.length === 0) {
    throw new Error('空队列不能pop');
  }
  if (this.outStack.length === 0) {
    while (this.inStack.length !== 0) {
      let q = this.inStack.pop();
      this.outStack.push(q);
    }
  }
  return this.outStack.pop();
};
Queue.prototype.isEmpty = function() {
  return this.inStack.length == 0 && this.outStack.length === 0;
};

let queue = new Queue();
queue.push(1);
queue.push(4);
queue.pop();
console.log(queue.isEmpty());
console.log(queue);
