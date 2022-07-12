/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Attempt 1: [Valid Solution]
var addTwoNumbers = function(l1, l2) {
    let l1Node = l1;
    let l2Node = l2;
    
    let head = new ListNode(-1, null);
    let currentNode = head;
    
    let sum = 0
    let carry = 0;
    
    while(l1 || l2) {
        let sum = ( l1 ? l1.val : 0) + ( l2 ? l2.val : 0 ) + carry
        if(sum > 9) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        
        if(head.val === -1) {
            head.val = sum;
        } else {
            const newNode = new ListNode(sum, null)
            currentNode.next = newNode;
            currentNode = newNode;
        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    if(carry) {
        currentNode.next = new ListNode(1,null)
    }
    
    return head
};

// Attempt 2: [Refined Solution]
var addTwoNumbers = function(l1, l2) {    
    let head = new ListNode(0);
    let currentNode = head;
    let carry = 0;
    
    while(l1 || l2 || carry !== 0) {
        let sum = ( l1 ? l1.val : 0) + ( l2 ? l2.val : 0 ) + carry
        
        if(sum > 9) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        
        const newNode = new ListNode(sum)
        currentNode.next = newNode;
        currentNode = newNode;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return head.next
};
