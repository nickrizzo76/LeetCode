/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const nodes = new Set();
    
    let nodeA = headA;
    while(nodeA) {
        nodes.add(nodeA);
        nodeA = nodeA.next;
    }
    
    let nodeB = headB;
    while(nodeB) {
        if(nodes.has(nodeB)) {
            return nodeB
        } else {
            nodes.add(nodeB);   
            nodeB = nodeB.next;
        }
    }
    return null;
};
