//https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1

function maxWater(arr,n){
    let ans=0;

    for(let i=0;i<n;i++){
        let leftMax = arr[i];
        for(let j=0;j<i;j++){
            leftMax = Math.max(leftMax,arr[j])
        }


        let rightMax = arr[i];
        for(let j=i+1;j<n;j++){
            rightMax = Math.max(rightMax,arr[j])
        }

        ans += Math.min(leftMax,rightMax) - arr[i]
    }

    return ans
}
// Input: 
let arr  = [3, 0, 2, 0, 4],n=5;

console.log(maxWater(arr,n))// Output: 7