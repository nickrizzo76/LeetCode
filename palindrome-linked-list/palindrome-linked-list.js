/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// SOLUTION: Naive with extra data structure
var isPalindrome = function(head) {
    const array = []
    let cur = head;
    while(cur) {
        array.push(cur.val)
        cur = cur.next;
    }
    console.log(array)
    let i = 0;
    let j = array.length - 1;
    while(i < j) {
        if(array[i] !== array[j]) return false;
        i++;
        j--;
    }
    return true;
};
