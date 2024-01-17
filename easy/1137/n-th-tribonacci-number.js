/**
 * @param {number} n
 * @return {number}
 */

// T3 = T0 + T1 + T2
// T4 = T3 + T2 + T1
// 
var tribonacci = function(n) {
    const numList = [0, 1, 1]
    if (n < 3) return numList[n]
    for (let i = 3; i<=n; i++) {
        const ith = numList[0] + numList[1] + numList[2]
        numList.shift()
        numList.push(ith)
    }
    return numList[2]
};

// Time: O(N)
