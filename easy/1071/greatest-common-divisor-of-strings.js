/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let result = ''
    if (str1+str2 !== str2+str1) {
        return result
    }
    for (let l=1; l<=str1.length; l++) {
        if (str2.length < l) break
        if (str1.length % l === 0) {
            const regex = new RegExp(`^(${str1.slice(0,l)})+$`)
            if (regex.test(str1) && regex.test(str2)) {
                result = str1.slice(0,l)
            }
        }
    }
    return result
};

// Not best solution using gcd function
// Time complexity : O(n)
// Space complexity : O(1)
