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


// Solution: An intersection existing between two linked lists implies that their tails are the same length. From this fact, we can 'sync' up the starting place of the longer list with the short list and then compare each pair of nodes in lockstep. 
// E.g. a => b => c => d => e => f
//           g => h => ^
// in this example, the two linked lists are [a, b, c, d, e, f] and [g, h, d, e, f] with an intersection at d;
// The solution then is to advance the first linked list by the difference of their lengths.
// The difference is 1 so we advance the first linked list 1 time, so that its head points at b.
// [b, c, d, e, f] and [g, h, d, e, f]
// comparing each pair of nodes, the algorithm will return d as the intersection node
var getIntersectionNode = function(headA, headB) {
    const aLength = findListLength(headA);
    const bLength = findListLength(headB);
    const lengthDiff = Math.abs(aLength - bLength)
    if(aLength > bLength) {
        headA = advanceListNode(headA, lengthDiff)
    } else {
        headB = advanceListNode(headB, lengthDiff)
    }
    
    while(headA) {
        if(headA === headB) return headA
        headA = headA.next;
        headB = headB.next;
    }
    
    return null;
    
};

function findListLength(head) {
    let count = 0;
    while(head) {
        count++;
        head = head.next;
    }
    return count;
}

function advanceListNode(head, n) {
    for(let i = 0; i < n; i++) {
            head = head.next;
    }
    return head;
}
