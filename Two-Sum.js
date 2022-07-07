/ **
  * URL: https://leetcode.com/problems/two-sum
  * Description: A naive solution to the problem under time constraint.
  *
  *
/

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};
