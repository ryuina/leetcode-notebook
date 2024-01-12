/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    return recurGuessNumber(1, n)
};

var recurGuessNumber = function(start, end) {
    const mid = Math.floor((start + end) / 2)
    const result = guess(mid)
    if (result === 0) {
        return mid
    }
    if (result === -1) {
        return recurGuessNumber(start, mid - 1)
    }
    if (result === 1) {
        return recurGuessNumber(mid + 1, end)
    }
}

// Time: O(logN)
// Space: O(logN)
