//https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1
function findWater(arr,n){
let leftArr = new Array(n);
let rightArr  = new Array(n);
let waterArea = 0;

// height = [0,1,0,2,1,0,1,3,2,1,2,1]
// left   = [0,1,1,2,2,2,2,3,3,3,3,3]
// right  = [3,3,3,3,3,3,3,3,3,2,2,1]
// water  = [0,0,1,0,1,2,1,0,0,1,0,0]

leftArr[0]=arr[0];
for(let i=1;i<n;i++){
    leftArr[i] = Math.max(leftArr[i-1],arr[i])
}

rightArr[n-1] = arr[n-1];
for(let i=n-2;i>=0;i--){
    rightArr[i] = Math.max(rightArr[i+1],arr[i]);
}
for( let i=0;i<n;i++){
    waterArea +=Math.min(leftArr[i],rightArr[i]) - arr[i]
}
return waterArea;

}

let arr = [3, 0, 2, 0, 4]
let n = arr.length;
console.log(findWater( arr,n))