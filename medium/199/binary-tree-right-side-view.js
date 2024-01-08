/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = []
    // check!
    if (root === null) return result
    let currentBreadth = [root]
    while (currentBreadth.length > 0) {
        result.push(currentBreadth[currentBreadth.length - 1].val)
        const nextBreadth = []
        currentBreadth.forEach((curr) => {
            if (curr.left) nextBreadth.push(curr.left)
            if (curr.right) nextBreadth.push(curr.right)
        })
        currentBreadth = nextBreadth
    }
    return result
};

// Time Complexity: O(N) - visiting N Nodes
// Space Complexity: O(logN) - store at most logN if valanced tree / but at worst case: O(N)
