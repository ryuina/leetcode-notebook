/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let words = []
    let newWord = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            newWord += s[i]
        }
        else {
            if (newWord.length > 0) words.push(newWord)
            newWord = ''
        }
    }
    if (newWord.length > 0) words.push(newWord)
    words.reverse()
    return words.join(' ')
};

// Time: O(n)
// Space: O(k) - k is counts of all word-able characters
