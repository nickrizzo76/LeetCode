/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// SOLUTION 1
var mergeTwoLists = function(list1, list2) {
    const dummyHead = new ListNode(0);
    let currentNode = dummyHead;
    
    while(list1 !== null && list2 !== null) {
        let val = null;
        if(list1.val < list2.val) {
            val = list1.val
            list1 = list1.next
        } else {
            val = list2.val
            list2 = list2.next
        }
        currentNode.next = new ListNode(val)
        currentNode = currentNode.next
    }
    
    
    let remainingList = list1 ? list1 : list2;
    while(remainingList !== null) {
        currentNode.next = new ListNode(remainingList.val)
        currentNode = currentNode.next
        remainingList = remainingList.next
    }
    return dummyHead.next
};

// SOLUTION 2
var mergeTwoLists = function(list1, list2) {
    const dummyHead = new ListNode(0);
    let currentNode = dummyHead;
    
    while(list1 !== null || list2 !== null) {
        let val = null;
        if(list1 === null) {
            val = list2.val
            list2 = list2.next
        } else if(list2 === null) {
            val = list1.val
            list1 = list1.next
        } else if(list1.val < list2.val) {
            val = list1.val
            list1 = list1.next
        } else {  // list1.val > list2.val
            val = list2.val
            list2 = list2.next
        }
        
        currentNode.next = new ListNode(val)
        currentNode = currentNode.next
    }
    
    return dummyHead.next
};

// SOLUTION 3 (Optimal Iterative)
var mergeTwoLists = function(list1, list2) {
    const dummyHead = new ListNode(-1);
    let previousNode = dummyHead;
    
    while(list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            previousNode.next = list1;
            list1 = list1.next;
        } else {
            previousNode.next = list2;
            list2 = list2.next;
        }
        previousNode = previousNode.next;
    }
    
    previousNode.next = list1 ? list1 : list2;
    
    return dummyHead.next
};
