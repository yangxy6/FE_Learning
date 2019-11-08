// 有bug，暂时保存记录

/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.linkedList = null; //双向链表
  this.length = capacity;
};

function ListNode(key, value) {
  this.value = value;
  this.key = key;
  this.pre = null;
  this.next = null;
}

function getLength(linkedList) {
  let cur = linkedList;
  let count = 0;
  while (cur !== null) {
    cur = cur.next;
    count++;
  }
  return count;
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let length = getLength(this.linkedList);
  if (length === 0) return -1;
  let cur = this.linkedList,
    head = this.linkedList;
  console.log(cur, 88);
  // 查询
  while (cur !== null) {
    if (cur.key === key) {
      let val = cur.value;
      // 最近使用过，将节点放到最新的处
      if (length > 1) {
        let next = cur.next;
        let pre = cur.pre;
        next.next = cur.pre;
        cur.next = null;
        next.pre = null;
      }
      return val;
    }
  }
  console.log(77);
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let length = getLength(this.linkedList);
  let cur = this.linkedList;
  let newNode = new ListNode(key, value);
  if (length === 0) {
    this.linkedList = newNode;
  } else {
    cur.next = newNode;
    newNode.pre = cur;
  }
  if (length >= this.length) {
    // console.log(length, this.length);
    //容量满了，需要删除后在新增
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.pre.next = null;
  }
};

// @lc code=end
