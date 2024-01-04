/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0
    let count = 0

    while (count < nums.length) {
        if (nums[i] === 0) {
            nums.push(0)
            nums.splice(i, 1)
        }
        else {
            i += 1
        }
        count += 1
    }
};

// Time Complexity: O(n)
// Space Complexity: O(1)