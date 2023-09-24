const maxProfit = function(prices) {
    let profit = 0;
    let buy = prices[0];
    for(let i=1;i<prices.length;i++){
        currProfit = prices[i]-buy
        profit = Math.max(profit, currProfit)
        buy = Math.min(prices[i],buy)
    }
   return profit;
};


// function maxProfit(prices) {
//     if (prices.length === 0) {
//         return 0; // If there are no prices, there can be no profit.
//     }

//     let minPrice = prices[0]; // Initialize the minimum price as the first price.
//     let maxProfit = 0; // Initialize the maximum profit as 0.

//     for (let i = 1; i < prices.length; i++) {
//         // Update the minimum price if we find a lower price.
//         if (prices[i] < minPrice) {
//             minPrice = prices[i];
//         } else {
//             // Calculate the profit if we sell at the current price.
//             const currentProfit = prices[i] - minPrice;
            
//             // Update the maximum profit if the current profit is greater.
//             if (currentProfit > maxProfit) {
//                 maxProfit = currentProfit;
//             }
//         }
//     }

//     return maxProfit;
// }