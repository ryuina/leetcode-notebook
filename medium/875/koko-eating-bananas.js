/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let start = 1
    let end = Math.max(...piles)
    while (start <= end) {
        const pivot = Math.floor((start + end) / 2)
        const total = piles.reduce((prev, acc) => prev + Math.ceil(acc / pivot), 0)
        if (total > h) {
            start = pivot + 1
        }
        if (total <= h) {
            end = pivot - 1
        }
    }
    return start
};

// Time: O(plogn)
// Space: O(1)
