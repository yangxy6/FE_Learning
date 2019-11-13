// 705-创建哈希表，实现add,container,remove方法
// 0-> false !!!
/**
 * Initialize your data structure here.
 */
class MyHashSet {
  constructor() {
    this.table = [];
  }
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  if (this.table.indexOf(key) === -1) {
    this.table.push(key);
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  let position = this.table.indexOf(key);
  if (position >= 0) {
    delete this.table[position];
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  return this.table.indexOf(key) >= 0;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
let obj = new MyHashSet();
obj.add(5);
obj.add(0);
console.log(obj.contains(0));
obj.remove(5);
console.log(obj.contains(5));

//
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = (pattern, str) => {
  let map = new Map();
  pattern = pattern.split('');
  str = str.split(' ');
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i]) && map.get(pattern[i]) !== str[i]) {
      return false;
    } else {
      map.set(pattern[i], str[i]);
    }
  }
  return true;
};
console.log(wordPattern('abba', 'dog dog dog dog'));
