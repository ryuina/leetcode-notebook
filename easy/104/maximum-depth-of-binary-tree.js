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
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0
    const leftMaxDepth = maxDepth(root.left)
    const rightMaxDepth = maxDepth(root.right)
    return Math.max(leftMaxDepth, rightMaxDepth) + 1
};

// Time Complexity: O(N) - visiting N nodes
// Space Complexity: O(N) - for the recursive stack (worst case  - only left trees)
//                   O(logN) - for valanced tree,
