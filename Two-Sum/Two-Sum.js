/ **
  * URL: https://leetcode.com/problems/two-sum
  * 
  *
/

// Attempt 1: Brute Force
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

// Attempt 2: Two Passes.  One to build the dictionary. Another to check for number-complement pairs
var twoSum = function(nums, target) {
    const dict = {}
    nums.forEach((num, index) => {
        if(dict[num]) dict[num] = [...dict[num], index]
        else dict[num] = [index];
    })
    
    
    const keys = Object.keys(dict)
    
    for(let i = 0; i < keys.length; i++) {
        const currentKey = keys[i];
        const keyToSearchFor = target - currentKey;
        
        if(keyToSearchFor == currentKey) {
            return dict[currentKey];
        }
        
        if(dict[keyToSearchFor]) {
            return [dict[currentKey], dict[keyToSearchFor]]
        }
    }
};

// Attempt 3* [Optimal Solution]: One-pass Dictionary
var twoSum = function(nums, target) {
    const dict = {}
    
    for(let i = 0; i < nums.length; i++) { 
        const difference = target - nums[i];
        if(dict[difference] !== undefined) {
            return [dict[difference], i]
        }
        dict[nums[i]] = i;
    }
};


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  ///////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


// Revisited
var twoSum = function(nums, target) {
    const dict = {}
    
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(dict[complement] !== undefined) {
            return [dict[complement], i]
        }
        
        dict[nums[i]] = i;
    }
};
