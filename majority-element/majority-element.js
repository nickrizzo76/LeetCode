/**
 * @param {number[]} nums
 * @return {number}
 */

// Hashmap Solution
// O(n) Time and Space Complexity
var majorityElement = function(nums) {
    const dict = {}
    let maxCount = Number.NEGATIVE_INFINITY;
    let maxElement = null;
    for(let i = 0; i < nums.length; i++) {
        const curNum = nums[i]
        if(curNum in dict) {
            dict[curNum] = dict[curNum] + 1;
        } else {
            dict[curNum] = 1;
        }
        if(dict[curNum] > maxCount) {
            maxCount = dict[curNum]
            maxElement = curNum;
        }   
    }
    return maxElement;
};

// Boyer-Moore Voting Algorithm
// O(n) Time + O(1) Space Complexity
// first try from memory of how the algorithm works
var majorityElement = function(nums) {
    let maxElement = nums[0];
        let count = 1;
        for(let i = 1; i < nums.length; i++) {
            if(count === 0) {
                maxElement = nums[i];
                count = 1;
            } else if(nums[i] === maxElement) {
                count++;
            } else {
                count--;
            }
        }
        return maxElement;
}

// set local vars to default values instead of pre-emptively setting them to the first element in *nums* and starting the loop 1 index later.
var majorityElement = function(nums) {
    let maxElement = null;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(count === 0) {
            maxElement = nums[i];
            count = 1;
        } else if(nums[i] === maxElement) {
            count++;
        } else {
            count--;
        }
    }
    return maxElement;
};
