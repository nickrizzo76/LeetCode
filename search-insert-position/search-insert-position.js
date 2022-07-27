/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    // catch edge case where the target number is (less than or equal) to OR (greater than) the start and the end numbers of the nums array respectively.
    if(target <= nums[start]) return 0;
    if(target > nums[end]) return end + 1;
    
    let middle = start + Math.floor((end - start) / 2);
    // the target insertion point is somewhere in the middle of the array
    while(start < end) {
        if(target > nums[middle]) {
            start = middle + 1;
        } else {
            end = middle;
        }
        middle = start + Math.floor((end - start) / 2);
    }
    
    return middle;
    
};
