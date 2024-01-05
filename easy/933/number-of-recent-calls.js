
var RecentCounter = function() {
    this.requests = []
    this.lastIndex = 0
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t)
    for (let i=this.lastIndex; i < this.requests.length; i++) {
        if (t - 3000 <= this.requests[i]) {
            this.lastIndex = i
            return this.requests.length - i
        }
    }
    return 0
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// ping Time Complexity: O(n)
// Space Complecity: O(n)
