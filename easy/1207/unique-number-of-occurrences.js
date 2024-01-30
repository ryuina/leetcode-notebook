/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const sorted = arr.sort((a, b) => a - b)
    let occurs = []
    for (let i = 0; i < sorted.length; i++) {
        let count = 1
        for (i; i < sorted.length - 1 && sorted[i] === sorted[i + 1]; i++) {
            count++
        }
        occurs.push(count)
    }
    const occurArray = occurs.sort((a, b) => a - b)
    for (let i = 0; i < occurArray.length - 1; i++) {
        if (occurArray[i] === occurArray[i + 1]) {
            return false
        }
    }
    return true
}

// Time: O(nlogn)
// Space: O(n)

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences2 = function (arr) {
    const occurMap = arr.reduce((prev, curr) => ({ ...prev, [curr]: (prev[curr] || 0) + 1 }), {})
    const occurArray = Object.values(occurMap)
    const occurSet = Array.from(new Set(occurArray))
    return occurArray.length === occurSet.length
};

// Time: O(n)
// Space: O(n)
