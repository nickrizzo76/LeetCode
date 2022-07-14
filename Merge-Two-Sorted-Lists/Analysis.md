# **Problem Information**<br />
Name: Merge Two Sorted Lists
Origin: [LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/)<br />
Input: list1 = [1,2,4], list2 = [1,3,4]<br />
Output: [1,1,2,3,4,4]<br />

![Problem Illustration](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

# **Solution**<br />
### Optimal Iterative
```
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
    // a dummyHead node for us to return at the end. Without this variable we would have no reference to the head of the linkedlist that we built
    const dummyHead = new ListNode(-1);
    // a variable that keeps a reference to the previous node that we're adding the next node to. Start pointing at the dummyHead, so we can add nodes to the linkedlist
    let previousNode = dummyHead;
    
    // iterate through one of the lists while there are still values in both of them.
    // append the smaller value node
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
    
    // one and only one list will always have a node at this point. This also covers the case where we were given one or two empty lists.
    previousNode.next = list1 ? list1 : list2;
    // return the first real node, which is the next node after the dummy head node
    return dummyHead.next
};
```

# **Takeaways and Lessons Learned**<br />
I made the mistake of operating on the linked list values instead of the nodes themselves causing unessecary code and logic. I didn't leverage an important aspect of linked lists, which is that once you have references to the nodes you want, you can cheaply 'graft' the linked lists. E.g.:

l1: a => b => [c] => d => e<br />
l2: x => y => [z]<br />
we have a reference of c and z, so we can point z.next to c<br />
resulting in: x => y => z => c => d => e<br />

This is what is happening with the code ```previousNode.next = list1 ? list1 : list2;```
