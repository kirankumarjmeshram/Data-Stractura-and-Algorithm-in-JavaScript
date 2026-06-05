// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/


var shipWithinDays = function(weights, days) {
    let n = weights.length;
    let low = Math.max(...weights);
    let high = weights.reduce((a,b)=>a+b);
    // console.log(low, high)
    while(low<high) {
        let mid = low + Math.floor((high-low)/2);
        let day = 1;
        let sum = 0;
        for(let weight of weights) {
            if(sum + weight>mid){
                day++;
                sum=0
            }
            sum+=weight
        }
        if(day>days){
            low = mid+1
        }else{
            high = mid
        }
    }
    return low;
};  