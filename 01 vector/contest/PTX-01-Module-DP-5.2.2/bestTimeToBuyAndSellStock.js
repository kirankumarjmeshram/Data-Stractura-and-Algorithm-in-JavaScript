var maxProfit = function(prices) {
    let sum = 0;
    for(let i=1;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            sum+=prices[i]-prices[i-1]
        }
    }
    return sum;
};


function maxProfit2(prices){
    let n = prices.length;
    let table = new Array(n).fill(0);
    for(let i=1;i<n;i++){
        table[i] = Math.max(table[i-1], table[i-1]+ prices[i]-prices[i-1])
    }
    console.log(table[n-1])
}

maxProfit([7,1,5,3,6,4])