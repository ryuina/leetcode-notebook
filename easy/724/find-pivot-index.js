/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let left = 0
    let right = nums.reduce((prev, acc) => prev + acc, 0) - nums[0]
    if (left === right) {
        return 0
    }


    for (let i = 1; i < nums.length; i++) {
        left += nums[i - 1]
        right -= nums[i]
        if (left === right) {
            return i
        }

    }

    return -1
};

// Time Complexity: O(n)
// Space Complexity: O(1)
