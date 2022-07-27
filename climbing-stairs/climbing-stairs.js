/**
 * @param {number} n
 * @return {number}
 */

const memo = {}

var climbStairs = function(n) {
    if(n < 2) {
        return 1
    }
    
    if(n in memo) {
        return memo[n]
    } else {
        memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
        return memo[n]
    }
    
};
