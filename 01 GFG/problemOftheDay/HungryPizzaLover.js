//Dominos Pizza has hungry customers waiting in the queue. Each unique order is placed by a customer at time x[i], 
//and the order takes y[i] units of time to complete. You have information on all n orders, Find the order in which 
//all customers will receive their pizza and return it. If two or more orders are completed at the same time then 
//sort them by non-decreasing order number.
// Input : 
let arr = [[4,1], [6,2], [7,6], [8,1], [1,3]]
// Output : 5 1 2 4 3

function hPl(arr){
    let total_time =[];
    let order =[];
    let ans = [];
    for (let i=0;i<arr.length;i++){
        total_time[i] = arr[i][0]+arr[i][1];
        order[i] = [total_time[i],i+1]
    }
    return //
}

console.log(hPl(arr))