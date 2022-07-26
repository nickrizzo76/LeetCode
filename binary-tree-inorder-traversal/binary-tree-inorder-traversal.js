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

// In order traversal = left, root, right

// Note: the function inputs were modified to include 'order = []'
var inorderTraversal = function(root, order = []) {
    if(!root || root.length === 0) return [];
    
    if(root.left) inorderTraversal(root.left, order);
    order.push(root.val)
    if(root.right) inorderTraversal(root.right, order);
    
    return order;
};
