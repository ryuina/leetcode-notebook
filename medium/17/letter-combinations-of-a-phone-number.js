/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let combinations = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    let result = []
    const digitList = digits.split('')
    
    for (let i=0; i<digitList.length; i++) {
        if (i === 0) {
            result = result.concat(combinations[digitList[0]])
        }
        else {
            let newResult = []
            const pre = result
            const post = combinations[digitList[i]]
            pre.forEach((s) => {
                newResult = newResult.concat(post.map((p) => s + p))
            })
            result = newResult
        }
    }

    return result
};

// Time Complexity: O(n)
// Space Complexity: O(n)
