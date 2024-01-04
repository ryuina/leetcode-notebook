/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let lastSum = nums.slice(0, k).reduce((acc, prev) => acc + prev, 0)
    let max = lastSum
    for (let i = 1; i + k - 1 < nums.length; i++) {
        const currSum = lastSum - nums[i - 1] + nums[i + k - 1]
        max = Math.max(max, currSum)
        lastSum = currSum
    } 
    return max / k
};

// Time Complexity: O(n)
// space Complexity: O(1)