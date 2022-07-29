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

// First solution
var maxDepth = function(root, count = 0) {
    if(!root) return 0;
    count++;
    if(!root.left && !root.right) {
        return count;
    }
    return Math.max(maxDepth(root.left, count), maxDepth(root.right, count))
};

// Simplified solution
var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max( 1 + maxDepth(root.left), 1 + maxDepth(root.right) )
};
