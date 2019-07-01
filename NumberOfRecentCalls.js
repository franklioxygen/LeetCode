/**
 * 933. Number of Recent Calls
 * Initialize your data structure here.
 */
var RecentCounter = function () {
    this.times = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    let curr = 0;
    for (time of this.times)
        if (time >= t - 3000 && time <= t) curr++;
    this.times.push(t);
    return curr + 1
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */