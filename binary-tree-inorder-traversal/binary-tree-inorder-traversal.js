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

// General Note: In order traversal = left, root, right

// SOLUTION: Recursive
// Note: the function inputs were modified to include 'order = []'
var inorderTraversal = function(root, order = []) {
    if(!root || root.length === 0) return [];
    
    if(root.left) inorderTraversal(root.left, order);
    order.push(root.val)
    if(root.right) inorderTraversal(root.right, order);
    
    return order;
};

// SOLUTION: Iterative
var inorderTraversal = function(root) {
    const res = []
    const stack = []
    
    let curr = root;
    
    while(curr !== null || stack.length > 0) {
        while(curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop()
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};
