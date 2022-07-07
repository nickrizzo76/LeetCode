/ **
  * URL: https://leetcode.com/problems/two-sum
  * 
  *
/

// Attempt 1: naive solution
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

// Attempt 2: solve with dictionary - still inefficient (has roughly the same performance as Attempt 1)
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

// Attempt 3
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
