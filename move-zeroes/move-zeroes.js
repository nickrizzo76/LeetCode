/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCount = 0;
    
    // loop through nums until a zero is found
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zeroCount++;
            // j is the index of the first position (where there was a 0) that needs to be backfilled with a number
            let j = i;
            // k is the current index of the rest of the numbers after j
            let k = j + 1;
            while(k < nums.length) {
                if(nums[k] === 0) {
                    zeroCount++;
                } else {
                    // back fill k to j and advance j
                    nums[j] = nums[k]
                    j++;
                }
                k++;
            }
            break;
        }
    }
    
    // back fill all the 0s that were encountered
    for(let i = nums.length - 1; i >= nums.length - zeroCount; i--) {
        nums[i] = 0;
    }
    
    return nums;
};
