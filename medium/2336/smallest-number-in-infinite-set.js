
var SmallestInfiniteSet = function () {
    this.sis = Array.from({ length: 1000 }, (_, i) => i + 1)
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
    return this.sis.shift()
};

/** 
 * @param {number} num
 * @return {void}
 */

// [1,2,4,5,] , 3
SmallestInfiniteSet.prototype.addBack = function (num) {
    let start = 0
    let end = this.sis.length - 1
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (num === this.sis[mid]) {
            return;
        }
        if (num > this.sis[mid]) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }
    }
    this.sis.splice(start, 0, num)
};
// Time: O(logn) 

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
