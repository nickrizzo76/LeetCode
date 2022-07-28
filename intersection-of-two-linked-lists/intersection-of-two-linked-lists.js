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

// The naive, dictionary approach that doesn't take advantage of the LinkedList data structure
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


// Solution that solves the problem by the fact that both linked lists are guaranteed not to have negative numbers in them.  Knowing that, we can negate all the nodes' values in one list, then search for any negative numbers in the other list.
var getIntersectionNode = function(headA, headB) {
    negateList(headA)
    
    let nodeB = headB;
    let result = null;
    
    // search for a negative node value
    while(nodeB) {
        if(nodeB.val < 0) {
            // store node with negative value and stop searching
            result = nodeB;
            break;
        }
        nodeB = nodeB.next;
    }
    // restore headA back to its original form
    negateList(headA)
    
    return result;
};

function negateList(nodeA) {
    const head = nodeA
    while(nodeA) {
        nodeA.val = -nodeA.val
        nodeA = nodeA.next;
    }
    
    return head;
}
