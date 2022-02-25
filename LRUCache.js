/**
 * 146. LRU Cache
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.valMap = new Map();
  this.vals = [];
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.valMap.has(key)) return -1;
  else {
    this.vals = this.vals.filter(el => {
      if (el[0] != key) return el;
    });
    this.vals.push([key, this.valMap.get(key)]);
    return this.valMap.get(key);
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.valMap.has(key)) {
    this.valMap.set(key, value);
    this.vals = this.vals.filter(el => {
      if (el[0] != key) return el;
    });
    this.vals.push([key, value]);
  } else if (this.vals.length + 1 <= this.capacity) {
    this.vals.push([key, value]);
    this.valMap.set(key, value);
  } else {
    delkey = this.vals.shift();
    this.valMap.delete(delkey[0]);
    this.valMap.set(key, value);
    this.vals.push([key, value]);
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */