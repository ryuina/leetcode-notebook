/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const nums1Set = new Set(nums1)
    const nums2Set = new Set(nums2)
    return [[...new Set(nums1.filter((num) => !nums2Set.has(num)))], [...new Set(nums2.filter((num) => !nums1Set.has(num)))]]
};

// Time Complexity: O(n)
// Space Complexity: O(n)
