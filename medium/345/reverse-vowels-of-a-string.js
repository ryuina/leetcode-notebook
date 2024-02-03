/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let vowels = []
    let result = ''
    for (let i = 0; i < s.length; i++) {
        if (vowelSet.has(s[i])) {
            vowels.push(s[i])
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (vowelSet.has(s[i])) {
            result += vowels.pop()
        } else {
            result += s[i]
        }
    }
    return result
};

// Time: O(n)
// Space: O(v)
