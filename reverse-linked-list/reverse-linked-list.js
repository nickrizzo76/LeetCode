/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// SOLUTION with a Stack
var reverseList = function(head) {
    // return input if empty
    if(!head) return head;
    
    // iterate through linked list and build a stack
    const stack = []
    let current = head;
    while(current) {
        stack.push(current);
        current = current.next;
    }
    
    // retain referenc to the head of our new linked list
    head = stack.pop() 
    let cur = head;
    // build the linked list
    while(stack.length > 0) {
        cur.next = stack.pop();
        cur = cur.next;
    }
    
    // remove a circular reference if it exists
    // it's possible that the last element's 'next' property will point to the previous element when it should point to null
    if(cur) { cur.next = null; }
  
    return head;
    
};


// Solution: Reverse in place
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // return input if empty
    if(!head) return head;
    
    // set 1st and 2nd pointer
    let previous = head;
    let current = previous.next;
    // remove circular reference. This is going to be the last node in the reversed linkedlist, so its 'next' should be null.
    previous.next = null;
    
    while(current) {
        // save reference to the next node
        const next = current.next;
        // reverse the link
        current.next = previous;
        // iterate previous
        previous = current;
        // iterate current
        current = next;
    }
    
    return previous;
};
