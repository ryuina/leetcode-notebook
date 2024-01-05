/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = []
    const chars = s.split('')
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '*') {
            stack.pop(stack.length - 1)
        }
        else {
            stack.push(chars[i])
        }
    }
    return stack.join('')
};

// Time Complexity: O(n)
// Space Copmplexity: O(n)
