/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    const chars = s.split('')
    let last = chars.slice(0, k).filter((c) => vowels.has(c)).length
    let result = last

    for (let i = k; i < s.length; i++) {
        if (vowels.has(chars[i - k]) && last > 0) {
            last--
        }
        if (vowels.has(chars[i])) {
            last++
        }
        result = Math.max(result, last)
    }

    return result
};

// Time: O(n)
// Space: O(1)
