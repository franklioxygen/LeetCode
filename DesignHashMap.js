/**
 * 706. Design HashMap
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.table = [];
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    for (el of this.table)
        if (el[0] == key) {
            el[1] = value;
            return;
        }
    this.table.push([key, value]);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    for (el of this.table) {
        if (el[0] == key) return el[1];
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    for (i = 0; i < this.table.length; i++) {
        if (this.table[i][0] == key) {
            this.table.splice(i, 1);
            break;
        }
    }

};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */