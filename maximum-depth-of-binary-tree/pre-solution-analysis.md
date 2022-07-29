URL: https://leetcode.com/problems/maximum-depth-of-binary-tree/<br>
Dscription: Given the root of a binary tree, return its maximum depth.
            A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.<br>
Input: root = [3,9,20,null,null,15,7]<br>
Output: 3<br>

```
Attempting a solution using the '4 Phases of Finding a Solution' method

1. Understand the problem; we have to see clearly what is required.
2. We have to see how the various items are connected, how the unknown is linked to the data, in order to obtain the idea of the solution, and to make a plan.
3. Carry out the plan
4. Look back at the solution and discuss it.
```
-----------------------------------------------------------------------------------------------------------------------------------------------------------
Restate the problem
1. We must find the route through the binary tree that will result in the longest contiguous path of nodes, with the next visited node always being a child of the current node.  This is a path that will start from the root node and end at a child node.  We cannot travel up the tree.

2. Notes about the information we're given:
POSITIVE INFO
- I remember solving a problem similar if not identical to this. The crux of that solution was to find the left or rightmost node for each level in the tree and increment the count whenever we traversed to that node.  I don't remember the tree type for that problem - whether we knew for sure there would always be a right node at each level, for example.
- This can probably be solved recursively by traversing each combination of left and right paths through the tree, then compare the height count return by each recursive call. 

NEGATIVE INFO
- The values of the nodes are irrelevant in this problem nor do they offer a tactical advantage nor a hook for a technique that would help solve the problem.
- We can't surmise the height of the tree from the number of input nodes because the tree isn't guaranteed to be balanced.

3. Carry out the plan:
- check if there is a root node, if so, increment count by 1, else return 0 (empty tree = 0 height).
- pass a count var by value
- .......
