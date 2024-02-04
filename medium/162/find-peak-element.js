/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length === 1) return 0
    const findPeak = (nums, start, end) => {
        const mid = Math.floor((start + end) / 2)
        if (mid === 0) { 
            if (nums[mid] > nums[mid + 1]) {
                return mid
            }
        }
        if (mid === nums.length - 1) {
            if (nums[mid] > nums[mid - 1]) {
                return mid
            }
        }
        if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
            return mid
        }
        if (nums[mid - 1] > nums[mid]) {
            return findPeak(nums, start, mid-1)
        }
        return findPeak(nums, mid+1, end)
        
    }
    return findPeak(nums, 0, nums.length - 1)
};

// Time: O(logn)
// space: O(logn)
