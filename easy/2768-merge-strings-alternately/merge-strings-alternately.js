/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const word1List = word1.split('')
    const word2List = word2.split('')
    
    let result = ''
    for (var i = 0; i < word1List.length; i++) {
        if (word2List.length <= i) {
            result += word1List.slice(i).join('')
            break
        }
        result += word1List[i] + word2List[i]
    }
    if (word1List.length < word2List.length) {
        result += word2List.slice(word1List.length).join('')
    }
    return result
};

// Time Complexity: O(n)
// Space Complexity: O(n)