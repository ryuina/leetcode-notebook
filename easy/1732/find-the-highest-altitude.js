/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let altitudes = [0]
    let max = 0
    for (let i = 0; i < gain.length; i++) {
        altitudes.push(gain[i] + altitudes[i])
        if (altitudes[i + 1] > max) {
            max = altitudes[i + 1]
        }
    }
    return max
};

// Time: O(n)
// Space: O(n)
