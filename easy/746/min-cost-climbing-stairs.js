/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // [0, 0, 10, 10+20 or 0+15]
    let minCosts = [0,0]
    for (let n = 2; n <= cost.length; n++) {
        minCosts.push(Math.min(minCosts[n-1] + cost[n-1], minCosts[n-2] + cost[n-2]))
    }
    return minCosts[cost.length]
};

// Time Complexity: O(n)
// Space Complexity: O(n)
