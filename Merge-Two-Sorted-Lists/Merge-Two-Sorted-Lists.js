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
