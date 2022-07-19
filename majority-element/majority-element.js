/**
 * @param {number[]} nums
 * @return {number}
 */

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
