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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let result = 0
    let pathSumMap = {}
    const traverse = (root, pathSum) => {
        if (!root) return 0
        const currPathSum = pathSum + root.val
        
        if (currPathSum === targetSum) {
            result++
        }

        // start from this root, find count of subPathSum that makes (currPathSum - subPathSum) = targetSum
        // if (0-nth pathSum) - (0-ith pathSum) = targetSum, than i+1-nth pathSum is targetSum
        // so the count of subPathSum is the count starts from this root
        if (pathSumMap[currPathSum - targetSum]) {
            result += pathSumMap[currPathSum - targetSum]
        }

        pathSumMap[currPathSum] = pathSumMap[currPathSum] ? pathSumMap[currPathSum] + 1 : 1

        traverse(root.left, currPathSum)
        traverse(root.right, currPathSum)

        pathSumMap[currPathSum]--
    }
    traverse(root, 0)
    return result
};

// Time: O(n)
// Space: O(n)
