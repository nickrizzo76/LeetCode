/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    
    let firstRunner = head;
    let secondRunner = head.next;
    while(firstRunner !== null && secondRunner !== null) {
        if(firstRunner === secondRunner) {
            return true;
        }
        
        firstRunner = firstRunner.next;
        secondRunner = secondRunner ? secondRunner.next : null;
        secondRunner = secondRunner ? secondRunner.next : null;
    }
    
    return false;
};
