// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} prices
 * @return {number}
 */
//  On each day, you may decide to buy and/or sell the stock. 
var maxProfit = function(prices) {
    let profit = 0;
    let buy = prices[0];
    for(let i=1;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            profit+= prices[i]-prices[i-1]
        }
        // buy = prices[i]
    }
    return profit;
};
