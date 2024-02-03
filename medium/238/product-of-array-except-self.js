/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let totalProduct = []
    let toIth = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        toIth.push(nums[i] * toIth[i - 1])
    }
    let reversed = [...nums].reverse()
    let fromIth = [reversed[0]]
    for (let i = 1; i < nums.length; i++) {
        fromIth.push(reversed[i] * fromIth[i - 1])
    }
    fromIth.reverse()
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            totalProduct.push(fromIth[1])
            continue;
        }
        if (i === nums.length - 1) {
            totalProduct.push(toIth[nums.length - 2])
            continue;
        }
        totalProduct.push(toIth[i - 1] * fromIth[i + 1])
    }
    return totalProduct

};

// Time: O(n)
// Space: O(n)
