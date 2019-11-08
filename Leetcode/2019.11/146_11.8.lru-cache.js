/*
 * @lc app=leetcode id=146 lang=javascript
 * 18/18 cases passed (188 ms)
 * Your runtime beats 85.11 % of javascript submissions
 * Your memory usage beats 40 % of javascript submissions (58.7 MB)
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 * LRU缓存算法，没有重复项
 * 思路：Map.prototype.keys()中返回一个新的Iterator对象，它包含着按照顺序插入的key值
 * **Map.prototype.keys()是顺序插入**
 */
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let cache = this.cache;
  if (cache.has(key)) {
    // 如果有就删了重新插入，保证是新的插在最后面
    let temp = cache.get(key);
    cache.delete(key);
    cache.set(key, temp);
    return temp;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let cache = this.cache;
  if (cache.has(key)) {
    // 同get
    cache.delete(key);
  } else if (cache.size >= this.capacity) {
    // 缓存已满时，cache.keys().next()返回最开始插入的
    cache.delete(cache.keys().next().value);
  }
  cache.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
