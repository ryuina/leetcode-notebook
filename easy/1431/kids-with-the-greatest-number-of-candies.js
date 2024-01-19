/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const max = Math.max.apply(null, candies)
    return candies.map((candy) => candy + extraCandies >= max)
};

// Time Complexity: O(n)
