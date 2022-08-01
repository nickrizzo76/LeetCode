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


---------------------------------------------------------------------------------------------------------------------------------------------------------


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCount = 0;
    // find index of first occuring 0
    let i = nums.findIndex(num => num === 0);
    
    if(i >= 0) {
        zeroCount = 1;
        let j = i + 1; // j iterates through the rest of the array looking for a non-zero number to assign to position i
        while(j < nums.length) {
            if(nums[j] === 0) {
                // increment the number of zeroes that need to be assigned to the end of the array
                zeroCount++;
            } else {
                // assign the first non-zero number to position i, which was previously a 0
                nums[i] = nums[j]
                i++;
            }
            j++;
        }
        
        for(let i = nums.length - 1; i >= nums.length - zeroCount; i--) {
            nums[i] = 0;
        }
    }
    
    return nums;
};
