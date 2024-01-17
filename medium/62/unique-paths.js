/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let pathCounts = Array(m).fill(0).map(x => Array(n).fill(1))

    for (let i=1; i<m; i++) {
        for (let j=1; j<n; j++) {
            pathCounts[i][j] = pathCounts[i-1][j] + pathCounts[i][j-1]
        }
    }    

    return pathCounts[m-1][n-1]
};

// Time complexity : O(m*n) 
// Space complexity : O(m*n)
