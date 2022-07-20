## Description
Origin: [LeetCode](https://leetcode.com/problems/majority-element/solution)<br />

Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

**Name**: majority element

**Input 1**: nums = [3,2,3]
**Output 1**: 3

**Input 2**: nums = [2,2,1,1,1,2,2]
**Output 2**: 2

## Hashmap Solution
**Time Complexity**: O(n)
  We only need to iterate through the input list *nums* one time to build an object/dictionary/hashmap.<br />
  We can also track the most counted number with 2 extra variables representing the number and its count.
**Space Complexity**: O(n)
  Per the problem instructions, it's guaranteed that there will be a majority element, so the maximum amount of unique elements in the input array is limited to (n / 2) + 1.  In other words, half the input array length + 1
