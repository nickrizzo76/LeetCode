/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;
    
    while(right < prices.length) {
        if(prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left])
        } else {
            left = right;
        }
        right++;
    }
    
    return maxProfit;
};
