/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let numIdxDict = {}
    for (var i = 0; i < nums.length; i++) {
        const left = target - nums[i]
        if (left in numIdxDict) {
            return [numIdxDict[left], i]
        }
        numIdxDict[nums[i]] = i
    }
    return []
};

// time : Beats 58.13% of users with JavaScript
// memory : Beats 35.83% of users with JavaScript
