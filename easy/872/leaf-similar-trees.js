/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var getLeaves = function (root) {
    if (!root.left && !root.right) {
        return [root.val]
    }

    let left = root.left ? getLeaves(root.left) : []
    let right = root.right ? getLeaves(root.right) : []


    return [...left, ...right]
}

var leafSimilar = function (root1, root2) {
    return getLeaves(root1).toString() === getLeaves(root2).toString()
};

// Time: O(n)
// Space: O(n)
